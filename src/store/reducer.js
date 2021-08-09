/*
 * @Author: GZH
 * @Date: 2021-08-06 11:45:26
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-09 14:38:34
 * @FilePath: \clound-music\src\store\reducer.js
 * @Description:
 */
import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../application/Recommend/store/index";
import { reducer as singersReducer } from "../application/Singers/store/index";
import { reducer as rankReducer } from "../application/Rank/store/index";

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  rank: rankReducer,
});
