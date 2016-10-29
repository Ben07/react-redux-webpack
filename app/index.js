import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './redux/create';
import Root from './containers/Root/Root';
import './styles/app.less';

const store = createStore(hashHistory);
const history = syncHistoryWithStore(hashHistory, store);

render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root/Root', () => {
        const NewRoot = require('./containers/Root/Root').default;
        render(
            <NewRoot store={store} history={history} />,
            document.getElementById('root')
        );
    });
}
