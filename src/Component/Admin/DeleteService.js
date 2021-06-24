import React, { useState, useEffect } from 'react';
import DeleteProduct from './DeleteProduct';

const DeleteService = () => {
    const [Delete,setDelete]= useState([]);
    useEffect(()=>{

     fetch('https://frozen-fortress-40113.herokuapp.com/getDelete')
     .then(res=> res.json())
     .then(data=> setDelete(data))
       },[])
       
       return (
           <div className="ListTable">
               <table>
                   <tr>
                   <th>ServiceName</th>
                   <th>Price</th>
                   <th>WhatToDo</th>
                   </tr>
               { 
                   Delete.map(product=> <DeleteProduct products={product}> </DeleteProduct>)
               }
               </table>
           </div>
       );
};

export default DeleteService;