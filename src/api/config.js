/*
 * @Author: GZH
 * @Date: 2021-08-06 15:26:41
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-06 16:14:24
 * @FilePath: \cloud-music\src\api\config.js
 * @Description:
 */

import axios from 'axios';

export const baseUrl = 'https://music-api-five.vercel.app';

//axios 的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, '网络错误');
  }
);

export { axiosInstance };
