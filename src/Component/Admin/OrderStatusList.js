import React from 'react';

const OrderStatusList = (props) => {
    console.log("pending ",props)
    const OnAprove=(id,client, Sname,price,)=>{
           console.log("Aprove ",client,Sname,price);
           const confirmService={
               UserName:client,
               ServiceName:Sname,
               ServicePrice: price,
               Status: "Complete"
           }
          //Adding
        const url = `https://frozen-fortress-40113.herokuapp.com/addFinalOrder`;
        fetch(url,{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(confirmService)
        }).then(res=> console.log('FinalOrder ',res))
        
        //Deleting
        fetch(`https://frozen-fortress-40113.herokuapp.com/deleteTempItem/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            console.log("deleted ");
        })
  alert("Approved .... ")
    }

 //function OF delete button
    const OnDelete=(id)=>{
         console.log("Delete");
         
         fetch(`https://frozen-fortress-40113.herokuapp.com/deleteTempItem/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            console.log("deleted ");
        })
        alert("Deleted")
    }


    return (
        <tr className="OrderStatusList">
              <td>{props.pendingOrders.UserName}</td>
              <td>{props.pendingOrders.ServiceName}</td>
              <td>{props.pendingOrders.ServicePrice}</td>
              <td>
                  <button onClick={()=>OnAprove(props.pendingOrders._id,props.pendingOrders.UserName,props.pendingOrders.ServiceName,props.pendingOrders.ServicePrice)}>Aprove</button>
                  <button onClick={()=>OnDelete(props.pendingOrders._id)}>Delete</button>
              </td>
        </tr>
    );
};

export default OrderStatusList;