/*
 * @Author: GZH
 * @Date: 2021-08-06 14:34:45
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-06 14:34:57
 * @FilePath: \cloud-music\src\api\utils.js
 * @Description:
 */

export const getCount = count => {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万';
  } else {
    return Math.floor(count / 10000000) / 10 + '亿';
  }
};
