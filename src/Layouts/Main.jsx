import React from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    const currectPath = useLocation()
    return (
        <div>
            {currectPath.pathname.includes('login') || currectPath.pathname.includes('register') || <Navbar></Navbar>}
            <Outlet></Outlet>
            {currectPath.pathname.includes('login') || currectPath.pathname.includes('register') || <Footer></Footer>}
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;