/*
 * @Author: GZH
 * @Date: 2021-08-06 15:27:07
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-06 16:10:48
 * @FilePath: \cloud-music\src\api\request.js
 * @Description:
 */

import { axiosInstance } from './config';

export const getBannerRequest = () => {
  return axiosInstance.get('/banner');
};

export const getRecommendListRequest = () => {
  return axiosInstance.get('/personalized');
};
