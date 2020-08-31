import React, { Component } from 'react';
import './Navbar.css';
import NavItems from './NavItems/NavItems';
import Slider from './Slider/Slider';

const navbar = () => {

        return (
            <div>
                <NavItems />
                <Slider />
                
            </div>
        );
}

export default navbar;