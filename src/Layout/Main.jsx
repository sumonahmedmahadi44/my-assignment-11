import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/navbar';
import Footer from '../Pages/Shared/Footer';
import ShopByCategory from '../Pages/Home/Home/ShopByCategory';
import Banner from '../Pages/Home/Home/Banner';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;