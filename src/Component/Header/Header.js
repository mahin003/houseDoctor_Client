import React from 'react';
import Navbar from './Navbar';
import "./Header.css";
import img from '../../Images/Header.png';
import HeaderDetails from './HeaderDetails';
const Header = () => {
    return (
        <div className="HeaderDiv">
            <Navbar></Navbar>
            <HeaderDetails></HeaderDetails>

        </div>
    );
};

export default Header;