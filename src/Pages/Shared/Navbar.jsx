import React, { useState } from 'react';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import { HiOutlineX } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className='z-10'>
            <div className='bg-[#00000060] text-white fixed w-full py-3 z-50 px-10 lg:block hidden'>
                <div className='flex justify-between h-full items-center'>
                    <div>
                        <h2 className='text-2xl font-bold'>BISTRO BOSS</h2>
                        <h3 className='text-xl tracking-[.4rem]'>Restaurant</h3>
                    </div>
                    <ul className='flex uppercase gap-5 font-bold'>
                        <NavLink className={({ isActive }) => isActive ? 'text-orange-500' : ''} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-orange-500' : ''} to='/contact'>Contact Us</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-orange-500' : ''} to='/dashboard'>Dashboard</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-orange-500' : ''} to='/menu'>Our Menu</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-orange-500' : ''} to='/shop/salad'>Our Shop</NavLink>
                        <li><FaCartPlus className='text-green-600 text-2xl'></FaCartPlus></li>
                        <button className='uppercase ms-3'>Sign out</button>
                    </ul>
                </div>
            </div>

            {/* mobile */}
            <div className='lg:hidden flex bg-[#00000060] fixed z-50 text-white px-4 py-3 w-full'>
                <div className='flex justify-between w-full'>
                    <FaBars className={isOpen ? 'text-transparent' : 'text-2xl cursor-pointer'} onClick={() => setIsOpen(true)}></FaBars>
                    <button className='uppercase ms-3'>Sign out</button>
                    {
                        isOpen && <div className='bg-[#000000c0] w-[60%] rounded-lg px-4 py-3 absolute'>
                            <HiOutlineX className='text-3xl cursor-pointer ms-auto absolute right-3' onClick={() => setIsOpen(false)}></HiOutlineX>
                            <ul className='flex flex-col gap-2 font-bold uppercase'>
                                <NavLink className={({ isActive }) => isActive ? 'text-orange-400' : ''} onClick={() => setIsOpen(false)} to='/'>Home</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'text-orange-400' : ''} onClick={() => setIsOpen(false)} to='/contact'>Contact Us</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'text-orange-400' : ''} onClick={() => setIsOpen(false)} to='/dashboard'>Dashboard</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'text-orange-400' : ''} onClick={() => setIsOpen(false)} to='/menu'>Our Menu</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'text-orange-400' : ''} onClick={() => setIsOpen(false)} to='/shop/salad'>Our Shop</NavLink>
                                <li><FaCartPlus className='text-green-600 text-2xl'></FaCartPlus></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;