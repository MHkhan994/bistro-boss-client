import React from 'react';

const MenuItem = ({ item }) => {

    const { image, recipe, price, name } = item

    return (
        <div className='flex gap-1 flex-col lg:flex-row lg:border-none border-b-2 items-center lg:items-start py-2'>
            <img className='h-20 w-24 pe-2 object-cover' src={image} alt="" style={{ borderRadius: '0% 51% 39% 46% / 10% 47% 42% 57%' }} />
            <div>
                <h2 className='text-xl'>{name}------------</h2>
                <p className='text-gray-400'>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default MenuItem;