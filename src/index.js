import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-virtualized/styles.css';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import appReducer from './store/reducers/app';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import * as serviceWorker from './serviceWorker';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  app: appReducer,
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <App style={{width: "100%"}}/>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
