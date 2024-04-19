import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Image } from "@chakra-ui/react";

const Slider: React.FC = () => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow]}
      className="mySwiper"
    >
      <SwiperSlide style={{ width: "12rem", height: "12rem" }}>
        <Image w="full" h="full" src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </SwiperSlide>
      <SwiperSlide style={{ width: "12rem", height: "12rem" }}>
        <Image w="full" h="full" src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide>
      <SwiperSlide style={{ width: "12rem", height: "12rem" }}>
        <Image w="full" h="full" src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      <SwiperSlide style={{ width: "12rem", height: "12rem" }}>
        <Image w="full" h="full" src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
      <SwiperSlide style={{ width: "12rem", height: "12rem" }}>
        <Image w="full" h="full" src="https://swiperjs.com/demos/images/nature-5.jpg" />
      </SwiperSlide>
      <SwiperSlide style={{ width: "12rem", height: "12rem" }}>
        <Image w="full" h="full" src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </SwiperSlide>
      <SwiperSlide style={{ width: "12rem", height: "12rem" }}>
        <Image w="full" h="full" src="https://swiperjs.com/demos/images/nature-7.jpg" />
      </SwiperSlide>
      <SwiperSlide style={{ width: "12rem", height: "12rem" }}>
        <Image w="full" h="full" src="https://swiperjs.com/demos/images/nature-8.jpg" />
      </SwiperSlide>
      <SwiperSlide style={{ width: "12rem", height: "12rem" }}>
        <Image w="full" h="full" src="https://swiperjs.com/demos/images/nature-9.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
