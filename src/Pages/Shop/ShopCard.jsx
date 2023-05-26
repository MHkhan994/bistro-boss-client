import React from 'react';

const ShopCard = ({ item }) => {

    const { name, recipe, image, currentTab } = item

    return (
        <div className=' bg-[#F3F3F3] shadow-lg border'>
            <img src={image} alt="" />
            <div className='px-7 py-4'>
                <h2 className='text-center text-2xl font-semibold pb-3'>{name}</h2>
                <p className='text-gray-500'>{recipe}</p>
                <button className='my-btn-primary bg-[#E8E8E8] hover:text-[#BB8506]'>Add to Cart</button>
            </div>
        </div>
    );
};

export default ShopCard;