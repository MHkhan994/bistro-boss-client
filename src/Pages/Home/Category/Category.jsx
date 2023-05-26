import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";

import { Pagination } from "swiper";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTop from '../../../Components/SectionTop';

const Category = () => {
    return (
        <div className='my-container'>
            <SectionTop
                heading='ORDER ONLINE'
                subHeading='From 11:00am 10:00pm'
            >

            </SectionTop>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h1 className='text-white relative bottom-14 drop-shadow-lg text-center text-xl lg:text-3xl font-semibold'>Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h1 className='text-white relative bottom-14 drop-shadow-lg text-center text-xl lg:text-3xl font-semibold'>Pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h1 className='text-white relative bottom-14 drop-shadow-lg text-center text-xl lg:text-3xl font-semibold'>Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h1 className='text-white relative bottom-14 drop-shadow-lg text-center text-xl lg:text-3xl font-semibold'>Cakes</h1></SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h1 className='text-white relative bottom-14 drop-shadow-lg text-center text-xl lg:text-3xl font-semibold'>Soups</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;