/*
 * @Author: GZH
 * @Date: 2021-08-06 11:45:14
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-06 13:38:24
 * @FilePath: \cloud-music\src\store\index.js
 * @Description:
 */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
