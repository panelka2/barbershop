import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
import s from './style.module.css'
import { Pagination, Navigation } from "swiper";
import "./style.css"

const desktop_1 = require('../../assets/slider/desktop_1.jpg');
const desktop_2 = require('../../assets/slider/desktop_2.jpg');
const desktop_3 = require('../../assets/slider/desktop_3.jpg');
SwiperCore.use([Autoplay]);

export const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={s.swiper}
                autoplay={true}
            >
                <SwiperSlide><img src={desktop_1} className={s.slide_img} alt="Акция Студентам скидка"/></SwiperSlide>
                <SwiperSlide><img src={desktop_2} className={s.slide_img} alt='Акция "Счасливые часы"'/></SwiperSlide>
                <SwiperSlide><img src={desktop_3} className={s.slide_img} alt="Акция Скидка на первый визит"/></SwiperSlide>
            </Swiper>
        </>
    );
}
