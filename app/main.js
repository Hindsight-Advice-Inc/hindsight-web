import React from 'react';
import Router from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import routes from './routes';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from "reducers"
import { Provider } from 'react-redux';
import Root from "root"
import Axios from 'axios'


Axios.interceptors.request.use(function(config) {
	config.url = "http://api.hindsight.svc.tutum.io:3000/" + config.url;
	config.params = config.params || {}
	config.params["session"] = "123"
	return config;
});

const history = new BrowserHistory();
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
const element = (
  <Provider store={store}>
    {() => <Router history={history} routes={routes} /> }
  </Provider>
);
React.render(element, document.body);
