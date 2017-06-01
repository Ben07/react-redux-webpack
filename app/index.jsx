import 'babel-polyfill';
import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import createStore from './redux/create';
import App from './components/App';
// import './styles/app.less';

const store = createStore();
const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component store={store} />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App);
    });
}