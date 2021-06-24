import React, {useEffect, useState } from 'react';
import "./ADmin.css"

import OrderStatusList from './OrderStatusList'
const OrderStatus = () => {
    const [PendingOrder, setPendingOrder]= useState([]);
    
    useEffect(() =>{
        fetch("https://frozen-fortress-40113.herokuapp.com/PendingServices")
        .then(res=>res.json())
        .then(data=>setPendingOrder(data))
    },[])
    return (
        <div  className="ListTable">
            <h3>Pending Orders</h3>
            <table>
                <tr>
                    <th>Client Name </th>
                    <th>ServiceName </th>
                    <th>ServicePrice </th>
                    <th>ServiceStatus </th>
                </tr>
           {
               
               PendingOrder.map(order=> <OrderStatusList pendingOrders={order}></OrderStatusList> )
               
           }
           </table>

        </div>
    );
};

export default OrderStatus;