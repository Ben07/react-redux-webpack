import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from './modules/reducer';

export default function createStore(history) {
    const reduxRouterMiddleware = routerMiddleware(history);
    const middleware = [thunk, reduxRouterMiddleware];
    const finalCreateStore = applyMiddleware(...middleware)(_createStore);
    const store = finalCreateStore(reducer);

    return store;
}