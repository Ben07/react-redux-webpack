import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import { persistState } from 'redux-devtools';
import DevTools from '../components/DevTools';
import reducer from './modules/reducer';

export default function createStore(history) {
    const reduxRouterMiddleware = routerMiddleware(history);
    const middleware = [thunk, reduxRouterMiddleware];

    const finalCreateStore = compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore);


    const store = finalCreateStore(reducer);

    module.hot.accept('./modules/reducer', () => {
        store.replaceReducer(reducer);
    });

    return store;
}