/*
 * @Author: GZH
 * @Date: 2021-08-06 15:27:07
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-09 14:37:19
 * @FilePath: \clound-music\src\api\request.js
 * @Description:
 */

import { axiosInstance } from "./config";

export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};

export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};

export const getHotSingerListRequest = (count) => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};

export const getSingerListRequest = (category, alpha, count) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};

export const getRankListRequest = () => {
  return axiosInstance.get(`/toplist/detail`);
};
