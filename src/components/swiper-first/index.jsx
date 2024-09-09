import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper-first.scss";

import { Pagination, Navigation, EffectFade } from "swiper/modules";

const SwiperFirst = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        loop={true}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="first-swiper"
      >
        <SwiperSlide>
          <div className="image-box">
            <Image
              src="/assets/images/section.jpg"
              fill
              priority
              quality={100}
              alt="podklyuch"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-box">
            <Image
              src="/assets/images/swiper.jpg"
              fill
              priority
              quality={100}
              alt="podklyuch"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-box">
            <Image
              src="/assets/images/section.jpg"
              fill
              priority
              quality={100}
              alt="podklyuch"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-box">
            <Image
              src="/assets/images/swiper.jpg"
              fill
              priority
              quality={100}
              alt="podklyuch"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperFirst;
