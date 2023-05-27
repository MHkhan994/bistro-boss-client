import React from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    const currectPath = useLocation()
    console.log(currectPath);
    return (
        <div>
            {currectPath.pathname.includes('login') || <Navbar></Navbar>}
            <Outlet></Outlet>
            {currectPath.pathname.includes('login') || <Footer></Footer>}
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;