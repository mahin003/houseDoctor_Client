import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ServiceStatusList from './ServiceStatusList';
import "./OrderService.css";
import { UserContext } from '../../App';

const ServiceStatus = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const {Username}= useParams();
   
    console.log("ServiceLiat email ",loggedInUser);
    const [ServiceHistory,setServiceHistory]=useState([]) ;
     //for fetchig data from db
     useEffect(()=>{
        fetch(`https://frozen-fortress-40113.herokuapp.com/FinalOrder/${Username}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setServiceHistory(result);
            })
    },[])

    return (
        <div className="ListTable">
            <h1>History</h1>
            <table>
                <tr>
                    <th>Service Name</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
             {
                 ServiceHistory.map(history=><ServiceStatusList History={history}></ServiceStatusList>)
             }
             </table>
        </div>
    );
};

export default ServiceStatus;