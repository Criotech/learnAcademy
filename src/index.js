import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwt from  'jsonwebtoken';
import { setCurrentUser } from './actions/AuthActions'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

// const store = createStore( reducers, 
//     {}, 
//     applyMiddleware(ReduxThunk) 
// )
const sagaMiddleware = createSagaMiddleware()
const store = createStore( rootReducer, compose(applyMiddleware(ReduxThunk, sagaMiddleware)  ))

sagaMiddleware.run(rootSaga)


if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken)
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

