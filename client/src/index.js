import React from 'react';
import App from './components/App';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//https://github.com/zalmoxisus/redux-devtools-extension
//easy to check history update
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,document.querySelector('#root')
);
