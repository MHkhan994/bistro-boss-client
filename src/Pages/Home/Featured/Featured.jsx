import React from 'react';

import img from '../../../assets/home/featured.jpg'

const Featured = () => {

    return (
        <div className={`h-[94vh] lg:h-screen bg-center`} style={{ background: `url(${img})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
            <div className='bg-[#000000b9] h-full flex flex-col justify-center'>
                <div className='text-center'>
                    <h3 className='text-lg text-[#D99904]'>---Check it out---</h3>
                    <h1 className='text-white lg:text-4xl text-2xl border-y-4 mx-auto my-3 border-gray-200 px-10 mb-6 lg:mb-12 py-1 lg:py-3 w-fit'>FEATURED ITEM</h1>
                </div>
                <div className='lg:w-2/3 w-[90%] mx-auto grid lg:grid-cols-2 gap-10'>
                    <img className='h-full' src={img} alt="" />
                    <div className='text-white text-xl space-y-2'>
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='text-[#D99904] border-b-2 rounded-lg px-5 py-2 hover:bg-white hover:text-black'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;