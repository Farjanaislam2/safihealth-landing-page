import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import TopNav from './../Navbar/TopNav';



const Main = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;