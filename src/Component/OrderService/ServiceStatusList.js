import React from 'react';

const ServiceStatusList = (props) => {
    console.log("history ",props)
    return (
       <tr>
           <td>{props.History.ServiceName}</td>
           <td>{props.History.ServicePrice}</td>
           <td>{props.History.Status}</td>
       </tr>
    );
};

export default ServiceStatusList;