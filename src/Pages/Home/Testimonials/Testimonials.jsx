import React, { useEffect, useState } from 'react';
import SectionTop from '../../../Components/SectionTop';
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='lg:pt-20 pt-12 my-container'>
            <SectionTop
                subHeading={'What Our Clients Say'}
                heading={'TESTIMONIALS'}
            >

            </SectionTop>
            <div>
                <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide className='text-center lg:px-20 px-10 space-y-2' key={review._id}>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                                className='mx-auto'
                            />
                            <FaQuoteLeft className='mx-auto text-8xl py-4'></FaQuoteLeft>
                            <p>{review.details}</p>
                            <p className='text-2xl font-semibold text-[#CD9003]'>{review.name}</p>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;