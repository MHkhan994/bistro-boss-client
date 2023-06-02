import React from 'react';
import MenuItem from '../../Shared/MenuItem';
import { Link } from 'react-router-dom';

const MenuSection = ({ items, img, title, category }) => {
    return (
        <div>
            {
                img && <div className='lg:h-[80vh] h-[50vh] mb-20 mt-12 w-full' style={{ background: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundAttachment: 'fixed' }}>
                    <div className='bg-[#0000001e] h-full w-full flex justify-center items-center'>
                        <div className='bg-[#00000093] uppercase my-container h-1/2 flex justify-center items-center flex-col text-white'>
                            <h1 className='lg:text-6xl text-5xl pb-4'>{title}</h1>
                            <p>Would you like to try a dish?</p>
                        </div>
                    </div>
                </div>
            }
            <div className='my-container grid grid-cols-1 lg:grid-cols-2 gap-3 space-y-2'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className='my-btn-primary'>
                <Link to={`/shop/${category}`}>ORDER YOUR FAVOURITE FOOD</Link>
            </button>
        </div>
    );
};

export default MenuSection;