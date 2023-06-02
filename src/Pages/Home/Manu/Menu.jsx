import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import MenuSection from './MenuSection';


import img from '../../../assets/menu/banner3.jpg'
import desert from '../../../assets/menu/dessert-bg.jpeg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
import salad from '../../../assets/menu/salad-bg.jpg'
import soup from '../../../assets/menu/soup-bg.jpg'
import useAxiosSecure from '../../../Hooks/UseAxionSecure';
import SectionTop from '../../../Components/SectionTop';
import PageBanner from '../../../Components/PageBanner';

const Menu = () => {
    const [menu, setMenu] = useState([])

    const [axiosSecure] = useAxiosSecure()

    useEffect(() => {
        axiosSecure('http://localhost:5000/menu')
            .then(res => setMenu(res.data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Menu</title>
            </Helmet>
            <PageBanner
                img={img}
                title={'Our Menu'}
            >
            </PageBanner>

            <div className='lg:mt-20 mt-12'>
                <SectionTop
                    heading="today's offer"
                    subHeading="don't miss"
                >
                </SectionTop>
            </div>

            {/* offered */}
            <MenuSection
                category={'drinks'}
                items={menu.filter(item => item.category === 'offered')}
            ></MenuSection>

            {/* dessets */}
            <MenuSection
                items={menu.filter(item => item.category === 'dessert')}
                title={'deserts'}
                img={desert}
                category={'dessert'}
            ></MenuSection>

            {/* pizza */}
            <MenuSection
                items={menu.filter(item => item.category === 'pizza')}
                title={'pizza'}
                img={pizza}
                category={'pizza'}
            ></MenuSection>

            {/* salads */}
            <MenuSection
                items={menu.filter(item => item.category === 'salad')}
                title={'salad'}
                img={salad}
                category={'salad'}
            ></MenuSection>

            {/* soup */}
            <MenuSection
                items={menu.filter(item => item.category === 'soup')}
                title={'soup'}
                img={soup}
                category={'soup'}
            ></MenuSection>
        </div >
    );
};

export default Menu;