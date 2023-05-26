import React from 'react';

const PageBanner = ({ img, title }) => {
    return (
        <div className='lg:h-screen h-[70vh] w-full' style={{ background: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='bg-[#0000001e] h-full w-full flex justify-center items-center'>
                <div className='bg-[#00000093] uppercase my-container h-1/2 flex justify-center items-center flex-col text-white'>
                    <h1 className='lg:text-6xl text-5xl pb-4'>{title}</h1>
                    <p>Would you like to try a dish?</p>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;