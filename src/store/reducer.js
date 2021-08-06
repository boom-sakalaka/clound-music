/*
 * @Author: GZH
 * @Date: 2021-08-06 11:45:26
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-06 15:40:14
 * @FilePath: \cloud-music\src\store\reducer.js
 * @Description:
 */
import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../application/Recommend/store/index';

export default combineReducers({
  recommend: recommendReducer,
});
