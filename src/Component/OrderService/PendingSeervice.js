import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PendingServiceList from './PendingServiceList';
import "./OrderService.css"

const PendingSeervice = () => {
   
    const {Username}= useParams();
    console.log("ServiceLiat email ", Username);
    
    const [ServicePending,setServicePending]=useState([]) ;
     //for fetchig data from db
     useEffect(()=>{
        fetch(`https://frozen-fortress-40113.herokuapp.com/PendingOrder/${Username}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setServicePending(result);
            })
    },[])

    return (
        <div className="ListTable">
            <h1>Pending Order</h1>
            <table>
                <tr>
                    <th>Service Name</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
             {
                 ServicePending.map(pending=><PendingServiceList Pending={pending}></PendingServiceList>)
             }
             </table>
        </div>
    );
};

export default PendingSeervice;