import React from 'react';

const ComfirmStatusList = (props) => {
    return (
        <tr className="ComformStatusList">
              <td>{props.ConfirmOrders.UserName}</td>
              <td>{props.ConfirmOrders.ServiceName}</td>
              <td>{props.ConfirmOrders.ServicePrice}</td>
              <td>{props.ConfirmOrders.Status}</td>
        </tr>
    );
};

export default ComfirmStatusList;