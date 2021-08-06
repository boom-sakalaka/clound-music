/*
 * @Author: GZH
 * @Date: 2021-08-06 10:46:38
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-06 13:53:10
 * @FilePath: \cloud-music\src\application\Recommend\index.js
 * @Description:
 */
import React from 'react';
import Slider from '../../components/slider';

function Recommend(props) {
  const bannerList = [1, 2, 3, 4].map(item => {
    return { imageUrl: 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg' };
  });

  return (
    <div>
      <Slider bannerList={bannerList} />
    </div>
  );
}

export default React.memo(Recommend);
