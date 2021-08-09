/*
 * @Author: GZH
 * @Date: 2021-08-06 11:45:26
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-09 11:01:38
 * @FilePath: \clound-music\src\store\reducer.js
 * @Description:
 */
import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../application/Recommend/store/index";
import { reducer as singersReducer } from "../application/Singers/store/index";

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
});
