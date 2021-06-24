import React, { useEffect, useState } from 'react';
import Products from './Products'
import "./Services.css"
const Services = () => {
    const [HouseService, setHouseService] = useState([]);

    useEffect(()=>{
        fetch("https://frozen-fortress-40113.herokuapp.com/addServices")
        .then(res=>res.json())
        .then(data=>setHouseService(data))
    },[])

    return (
        <div style={{ paddingTop:"30px",backgroundColor:"#d1eafa"}}>
              <h1 className="ServiceHead">Services We Provide</h1>
        <div className="ServiceDiv">
         
            {
                //   console.log("huse ",HouseService)
                HouseService.map(item => <Products Service={item}></Products>)
                // HouseService.map(item=> <Products Service={item}></Products>)
            }
             </div>        
        </div>
    );
};

export default Services;