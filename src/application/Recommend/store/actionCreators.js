/*
 * @Author: GZH
 * @Date: 2021-08-06 15:32:03
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-06 16:37:09
 * @FilePath: \cloud-music\src\application\Recommend\store\actionCreators.js
 * @Description:
 */

//actionCreators.js
import * as actionTypes from './constants';
import { fromJS } from 'immutable'; // 将 JS 对象转换成 immutable 对象
import { getBannerRequest, getRecommendListRequest } from '../../../api/request';

export const changeBannerList = data => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data),
});

export const changeRecommendList = data => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data),
});

export const getBannerList = () => {
  return dispatch => {
    getBannerRequest()
      .then(data => {
        dispatch(changeBannerList(data.banners));
      })
      .catch(() => {
        console.log('轮播图数据传输错误');
      });
  };
};

export const changeEnterLoading = data => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data,
});
// 另外在获取推荐歌单后，应把 loading 状态改为 false
export const getRecommendList = () => {
  return dispatch => {
    getRecommendListRequest()
      .then(data => {
        dispatch(changeRecommendList(data.result));
        dispatch(changeEnterLoading(false)); // 改变 loading
      })
      .catch(() => {
        console.log('推荐歌单数据传输错误');
      });
  };
};
