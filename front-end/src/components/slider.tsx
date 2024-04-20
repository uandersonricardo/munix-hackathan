import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Image } from "@chakra-ui/react";

import img1 from "../assets/img-1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import { Link } from "react-router-dom";

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
      <SwiperSlide style={{ width: "12rem", height: "12rem", cursor: "pointer" }}>
        <Link to="/files/1">
          <Image w="full" h="full" src={img1} />
        </Link>
      </SwiperSlide>
      <SwiperSlide style={{ width: "12rem", height: "12rem", cursor: "pointer" }}>
        <Link to="/files/1">
          <Image w="full" h="full" src={img2} />
        </Link>
      </SwiperSlide>
      <SwiperSlide style={{ width: "12rem", height: "12rem", cursor: "pointer" }}>
        <Link to="/files/1">
          <Image w="full" h="full" src={img3} />
        </Link>
      </SwiperSlide>
      <SwiperSlide style={{ width: "12rem", height: "12rem", cursor: "pointer" }}>
        <Link to="/files/1">
          <Image w="full" h="full" src={img4} />
        </Link>
      </SwiperSlide>
      <SwiperSlide style={{ width: "12rem", height: "12rem", cursor: "pointer" }}>
        <Link to="/files/1">
          <Image w="full" h="full" src={img5} />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
