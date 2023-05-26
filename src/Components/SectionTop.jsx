import React from 'react';

const SectionTop = ({ heading, subHeading }) => {
    return (
        <div className='text-center'>
            <h3 className='text-lg text-[#D99904]'>---{subHeading}---</h3>
            <h1 className='lg:text-4xl text-2xl border-y-4 mx-auto my-3 border-gray-200 px-10 mb-6 lg:mb-12 py-1 lg:py-3 w-fit'>{heading}</h1>
        </div>
    );
};

export default SectionTop;