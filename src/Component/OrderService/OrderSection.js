import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const OrderSection = () => {
    const {id}= useParams();
    console.log("IDForService ",id)
    const [bookedService, setBookedService] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 

    const HandleProced=()=>{
        //addTempOrder
        console.log("loggedInUser.UserName ",loggedInUser)
        const TempOrder={
            UserName : loggedInUser.userName,
            ServiceId:bookedService._id, 
            ServiceName :bookedService._name,
            ServicePrice: bookedService._price,
            status : "pending"
        }
        console.log("clicked ",TempOrder);
        const url = `https://frozen-fortress-40113.herokuapp.com/addTempOrder`;
        fetch(url,{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(TempOrder)
        }).then(res=> console.log('TmpOrder ',res))
        alert("We Have Taken your order")
    }

     //for fetchig data from db
    useEffect(()=>{
        fetch(`https://frozen-fortress-40113.herokuapp.com/bookedOrder/${id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setBookedService(result);
            })
    },[])


    return (
        <div style={{height:"400px"}}>
            {console.log("Booking ", bookedService)}
            {/* <h1>Order{id}</h1> */}
            <div style={{marginTop:"90px",color:"red"}} >
                <h3>Client Name: {loggedInUser.userName}</h3>
                <h3>{bookedService._name}</h3>
                <h4>Package Price: ${bookedService._price}</h4>
                <button onClick={HandleProced} style={{width:"10%", borderRadius:"20px",marginTop:"10px"}}>Proceed</button>
            </div>
        </div>
    );
};

export default OrderSection;