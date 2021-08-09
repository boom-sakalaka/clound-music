/*
 * @Author: GZH
 * @Date: 2021-08-09 14:37:34
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-09 14:41:32
 * @FilePath: \clound-music\src\application\Rank\store\index.js
 * @Description:
 */

//rank/store/index.js
import { fromJS } from "immutable";
import { getRankListRequest } from "../../../api/request";

//constants
export const CHANGE_RANK_LIST = "home/rank/CHANGE_RANK_LIST";
export const CHANGE_LOADING = "home/rank/CHANGE_LOADING";

//actionCrreator
const changeRankList = (data) => ({
  type: CHANGE_RANK_LIST,
  data: fromJS(data),
});

export const getRankList = () => {
  return (dispatch) => {
    getRankListRequest().then((data) => {
      let list = data && data.list;
      dispatch(changeRankList(list));
      dispatch(changeLoading(false));
    });
  };
};

const changeLoading = (data) => ({
  type: CHANGE_LOADING,
  data,
});

//reducer
const defaultState = fromJS({
  rankList: [],
  loading: true,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_RANK_LIST:
      return state.set("rankList", action.data);
    case CHANGE_LOADING:
      return state.set("loading", action.data);
    default:
      return state;
  }
};

export { reducer };
