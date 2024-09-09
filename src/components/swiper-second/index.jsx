import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper-second.scss";

import { Pagination, Navigation } from "swiper/modules";

const SwiperSecond = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        rewind={true}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="second-swiper"
      >
        <SwiperSlide>
          <h1>Дизайнерский ремонт квартиры NRG group</h1>
          <p>Разработка стен пола и мебели собраны эстетично и со вкусом</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Дизайнерский ремонт квартиры NRG group</h1>
          <p>Разработка стен пола и мебели собраны эстетично и со вкусом</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Дизайнерский ремонт квартиры NRG group</h1>
          <p>Разработка стен пола и мебели собраны эстетично и со вкусом</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Дизайнерский ремонт квартиры NRG group</h1>
          <p>Разработка стен пола и мебели собраны эстетично и со вкусом</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Дизайнерский ремонт квартиры NRG group</h1>
          <p>Разработка стен пола и мебели собраны эстетично и со вкусом</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Дизайнерский ремонт квартиры NRG group</h1>
          <p>Разработка стен пола и мебели собраны эстетично и со вкусом</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Дизайнерский ремонт квартиры NRG group</h1>
          <p>Разработка стен пола и мебели собраны эстетично и со вкусом</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Дизайнерский ремонт квартиры NRG group</h1>
          <p>Разработка стен пола и мебели собраны эстетично и со вкусом</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Дизайнерский ремонт квартиры NRG group</h1>
          <p>Разработка стен пола и мебели собраны эстетично и со вкусом</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Дизайнерский ремонт квартиры NRG group</h1>
          <p>Разработка стен пола и мебели собраны эстетично и со вкусом</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Дизайнерский ремонт квартиры NRG group</h1>
          <p>Разработка стен пола и мебели собраны эстетично и со вкусом</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Дизайнерский ремонт квартиры NRG group</h1>
          <p>Разработка стен пола и мебели собраны эстетично и со вкусом</p>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default SwiperSecond;
