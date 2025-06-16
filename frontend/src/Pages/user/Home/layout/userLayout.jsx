// Layout.jsx
import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import './userLayout.scss';

const Layout = () => {
    return (
        <div className="layout-container">
            <NavBar />
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
