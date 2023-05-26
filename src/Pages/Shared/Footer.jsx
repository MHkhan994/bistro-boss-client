import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-32'>
            <div className='text-white w-full grid lg:grid-cols-2 grid-cols-1 h-[60vh]'>
                <div className='bg-[#1F2937] text-center'>
                    <div className="lg:w-3/4 lg:ms-auto flex justify-center items-center flex-col h-full gap-3">
                        <h3 className='text-3xl pb-3'>CONTACT US</h3>
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className='bg-[#111827]'>
                    <div className="lg:w-3/4 lg:me-auto flex justify-center items-center flex-col h-full gap-3">
                        <h3 className='text-3xl pb-3'>Follow US</h3>
                        <p>Join us on social media</p>
                        <div className='flex gap-6 text-3xl pt-3'>
                            <FaFacebookF />
                            <FaInstagram />
                            <FaTwitter />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#151515]'>
                <p className='text-white text-center py-3 text-sm'>Copyright © CulinaryCloud. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;