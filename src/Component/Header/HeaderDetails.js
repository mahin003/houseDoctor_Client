import React from 'react';
import "./Header.css";
import img from '../../Images/Header.png';
const HeaderDetails = () => {
    return (
        <div className="HeaderDetails row">
            <div className="Shop">
                <div className="Slogan ml-auto">
                <h3>We are here to make your days better</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis repellendus, porro eos ipsa beatae</p>
                </div>
            </div>
            <div className="Img">
               <img  src={img}/>
            </div>
            
        </div>
    );
};

export default HeaderDetails;