import React from 'react';

const PendingServiceList = (props) => {
    console.log("Usertemp ",props)
    return (
       <tr>
           <td>
               {props.Pending.ServiceName} 
           </td>
           <td>
               {props.Pending.ServicePrice} 
           </td>
           <td>
               {props.Pending.status} 
           </td>

       </tr>
    );
};

export default PendingServiceList;