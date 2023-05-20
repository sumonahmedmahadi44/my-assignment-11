import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/navbar';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;