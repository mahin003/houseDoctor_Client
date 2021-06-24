import React from 'react';

const DeleteProduct = (props) => {
    console.log("Delete ",props);
    const ServiceDelete=(id)=>{

        console.log("ID ",id)
        fetch(`https://frozen-fortress-40113.herokuapp.com/deleteService/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            console.log("deleted ");
        })
        alert("Deleted");

    }
   
    return (
        <tr>
            <td>
              {props.products._name}
            </td>
            <td>
            {props.products._price}
            </td>
            <td>
                <button onClick={()=>ServiceDelete(props.products._id)} >Delete</button>
            </td>
        </tr>
    );
};

export default DeleteProduct;