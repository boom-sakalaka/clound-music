/*
 * @Author: GZH
 * @Date: 2021-08-06 13:51:10
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-06 14:51:31
 * @FilePath: \cloud-music\src\components\slider\index.js
 * @Description:  https://swiperjs.com/get-started  swiperjs的使用
 */
import React, { useEffect, useState } from 'react';

import { SliderContainer } from './style';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import Swiper from 'swiper';
SwiperCore.use([Pagination, Autoplay]);

function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const { bannerList } = props;
  useEffect(() => {
    if (bannerList && !sliderSwiper) {
      let newSliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination' },
      });

      setSliderSwiper(newSliderSwiper);
    }
  }, [bannerList, sliderSwiper]);
  return (
    <SliderContainer>
      <div className='before'></div>
      <div className='slider-container'>
        <div className='swiper-wrapper'>
          {bannerList.map((slider, index) => {
            return (
              <div className='swiper-slide' key={slider.imageUrl} key={index}>
                <div className='slider-nav'>
                  <img src={slider.imageUrl} width='100%' height='100%' alt='推荐' />
                </div>
              </div>
            );
          })}
        </div>
        <div className='swiper-pagination'></div>
      </div>
    </SliderContainer>
  );
}

export default React.memo(Slider);
