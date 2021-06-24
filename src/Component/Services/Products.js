import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
const Products = (props) => {

    const BookOrderProcess=(id)=>{
           console.log("Clicked ", id)
    }
    console.log('props ', props)
    return (
        <div className="ServicePiece ">
           <div className="ServiceImage">
               <img src={props.Service._url}/>
           </div>
           <div className="ServicePieceDetail">
               <div className="ServicePieceInfo">
               <h4 style={{borderBottom:"2px solid white"}}>{props.Service._name}</h4>
               <p>{props.Service._description}</p>
               <p>Package Price : {props.Service._price}</p>
               </div>

               <div className="ServicePieceButton">
                <button ><Link to={`/order/${props.Service._id}`}>Book Service</Link> </button>
                {/* <button onClick={()=>BookOrderProcess(props.Service._id)}>Book Order</button> */}
                </div>
           </div>
        </div>
    );
};

export default Products;