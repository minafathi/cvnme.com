import React from 'react';
import Navbar from './Nav/Navbar';
import './Home.css';

import Footer from './Footer/Footer';
const home = () => {
    return (
        <div className="Home">
            <Navbar />
            <div className="box1"></div>
            <Footer />
        </div>
    );
}

export default home;