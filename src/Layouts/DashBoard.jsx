import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaBook, FaCalendarAlt, FaHome, FaMailBulk, FaShoppingBag, FaShoppingCart, FaUtensils, FaWallet } from 'react-icons/fa';
import { BsFillChatSquareDotsFill } from 'react-icons/bs'
import { AiOutlineBars } from 'react-icons/ai'
import { HiUserGroup } from 'react-icons/hi'
import useCart from '../Hooks/UseCart';
import { BeatLoader } from 'react-spinners';
import UseAdmin from '../Hooks/UseAdmin';

const DashBoard = () => {
    const [cart] = useCart()


    // const isAdmin = true
    const [isAdmin, isAdminLoading] = UseAdmin()
    console.log(isAdmin);

    if (isAdminLoading) {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                <BeatLoader
                    color='#BB8506'
                    size={15}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                >
                </BeatLoader>
            </div>
        );
    }

    return (
        <div className="drawer drawer-mobile bg-gray-100">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content lg:px-20 px-10 pt-12">
                <label htmlFor="my-drawer-2" className="pt-4 lg:hidden"><FaBars></FaBars></label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side dash-drawer">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="px-1 lg:px-3 menu dash-drawer bg-[#D1A054] text-black pt-10 uppercase font-semibold w-56 lg:w-full">
                    <div className='px-3 pb-6'>
                        <h2 className='text-2xl font-bold'>BISTRO BOSS</h2>
                        <h3 className='text-xl tracking-[.4rem]'>Restaurant</h3>
                    </div>
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-white' : ''}><FaHome></FaHome>Admin home</NavLink></li>
                                <li><NavLink to='/dashboard/addItem' className={({ isActive }) => isActive ? 'text-white' : ''}><FaUtensils></FaUtensils>Add item</NavLink></li>
                                <li><NavLink to='/history' className={({ isActive }) => isActive ? 'text-white' : ''}><AiOutlineBars></AiOutlineBars>Manage items</NavLink></li>
                                <li><NavLink to='/dashboard/cart' className={({ isActive }) => isActive ? 'text-white' : ''}><FaBook></FaBook>manage bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allusers' className={({ isActive }) => isActive ? 'text-white' : ''}><HiUserGroup></HiUserGroup>all users</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-white' : ''}><FaHome></FaHome>User home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation' className={({ isActive }) => isActive ? 'text-white' : ''}><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
                                <li><NavLink to='/history' className={({ isActive }) => isActive ? 'text-white' : ''}><FaWallet></FaWallet>Payment history</NavLink></li>
                                <li><NavLink to='/dashboard/cart' className={({ isActive }) => isActive ? 'text-white' : ''}><FaShoppingCart></FaShoppingCart> My cart</NavLink></li>
                                <li><NavLink to='/dashboard/review' className={({ isActive }) => isActive ? 'text-white' : ''}><BsFillChatSquareDotsFill></BsFillChatSquareDotsFill> Add review</NavLink></li>
                                <li><NavLink to='/dashboard/booking' className={({ isActive }) => isActive ? 'text-white' : ''}><FaCalendarAlt></FaCalendarAlt>my booking</NavLink></li>
                            </>
                    }
                    <div className="py-3">
                        <hr />
                    </div>
                    <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                    <li><Link to='/menu'><FaBars></FaBars>menu</Link></li>
                    <li><Link to='/shop/salads'><FaShoppingBag></FaShoppingBag>shop</Link></li>
                    <li><Link to='/shop'><FaMailBulk></FaMailBulk>Contact</Link></li>
                </ul>
            </div>
        </div >
    );
};

export default DashBoard;