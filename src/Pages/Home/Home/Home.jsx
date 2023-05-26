import React from 'react';
import Footer from '../../Shared/Footer';
import Navbar from '../../Shared/Navbar';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BistroBoss from '../BistroBoss/BistroBoss';
import PopularMenu from '../PopularMenu/PopularMenu';
import ChefRecommend from '../ChefRecommend/ChefRecommend';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <div className='h-64 bg-black my-container lg:my-20 my-12 flex items-center justify-center'>
                <p className='text-white lg:text-5xl text-2xl'>Call Us: +88 0192345678910</p>
            </div>
            <ChefRecommend></ChefRecommend>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;