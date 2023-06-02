import React, { useEffect, useState } from 'react';
import PageBanner from '../../../Components/PageBanner'

import shopImg from '../../../assets/shop/banner2.jpg'
import Tab from './Tab';
import ShopCard from './ShopCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../Hooks/UseAxionSecure';


const Shop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { paramCategory } = useParams()
    const [menu, setMenu] = useState([])
    const [category, setCategory] = useState(paramCategory || 'salad')
    const [activeTab, setActiveTab] = useState(categories.indexOf(category));
    const [axiosSecure] = useAxiosSecure()
    console.log(categories.indexOf(category));

    useEffect(() => {
        axiosSecure(`http://localhost:5000/menu?category=${category}`)
            .then(res => setMenu(res.data))
    }, [category])

    const handleTabClick = (index, cate) => {
        setActiveTab(index);
        setCategory(cate)
    };

    console.log(category, menu);

    return (
        <div>
            <Helmet>
                <title>Bistro Boss - shop | {category}</title>
            </Helmet>
            <PageBanner img={shopImg} title={'our shop'}></PageBanner>
            <div>
                <ul className='flex justify-center gap-4 text-lg uppercase font-semibold mt-20'>
                    <Tab
                        label="salad"
                        isActive={activeTab === 0}
                        onClick={() => handleTabClick(0, 'salad')}
                    />
                    <Tab
                        label="pizza"
                        isActive={activeTab === 1}
                        onClick={() => handleTabClick(1, 'pizza')}
                    />
                    <Tab
                        label="soups"
                        isActive={activeTab === 2}
                        onClick={() => handleTabClick(2, 'soup')}
                    />
                    <Tab
                        label="desserts"
                        isActive={activeTab === 3}
                        onClick={() => handleTabClick(3, 'dessert')}
                    />
                    <Tab
                        label="drinks"
                        isActive={activeTab === 4}
                        onClick={() => handleTabClick(4, 'drinks')}
                    />
                </ul>
            </div>
            <div className='my-container grid lg:grid-cols-3 grid-cols-1 gap-4 pt-10'>
                {
                    menu.map(item => <ShopCard key={item._id} item={item}></ShopCard>)
                }
            </div>
        </div>
    );
};

export default Shop;