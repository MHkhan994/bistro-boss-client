import React from 'react';

import img from '../../../assets/home/chef-service.jpg'
import SectionTop from '../../../Components/SectionTop';

const BistroBoss = () => {
    return (
        <div>
            <div className='relative lg:my-20 my-12 my-container lg:h-[70vh] h-[50vh]'>
                <img className='w-full h-full object-cover' src={img} alt="" />
                <div className='z-20 h-full w-full flex justify-center items-center absolute top-0 left-0'>
                    <div className='bg-white mx-[8%] lg:px-16 px-8 lg:py-16 py-8 text-center'>
                        <h2 className='text-4xl font-semibold pb-3 italic'>Bistro Boss</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default BistroBoss;