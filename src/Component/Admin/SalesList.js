import React, { useEffect, useState } from 'react';
import ComfirmStatusList from './ComfirmStatusList';
import "./ADmin.css"
const SalesList = () => {
    const [ConfirmOrder, setConfirmOrder]= useState([]);
    
    useEffect(() =>{
        fetch("https://frozen-fortress-40113.herokuapp.com/ConfirmedServices")
        .then(res=>res.json())
        .then(data=>setConfirmOrder(data))
    },[])
    return (
        <div className="ListTable">
            <h3>Completed Orders</h3>
            <table>
                <tr>
                    <th>Client Name </th>
                    <th>ServiceName </th>
                    <th>ServicePrice </th>
                    <th>ServiceStatus </th>
                </tr>
           {
               
               ConfirmOrder.map(order=> <ComfirmStatusList ConfirmOrders={order}></ComfirmStatusList> )
               
           }
           </table>

        </div>
    )};

export default SalesList;