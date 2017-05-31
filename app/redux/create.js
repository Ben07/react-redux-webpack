import { createStore as _createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './modules/reducer';

export default function createStore() {
    const middleware = [thunk];
    const finalCreateStore = applyMiddleware(...middleware)(_createStore);
    const store = finalCreateStore(reducer);

    return store;
}