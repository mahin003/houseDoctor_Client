import React from 'react';
import "./ADmin.css"
const SeeReviewList = (props) => {
    const ReviewDelete=(id)=>{
        
        console.log("ID ",id)
        fetch(`https://frozen-fortress-40113.herokuapp.com/deleteReview/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            console.log("deleted ");
        })
        alert("Deleted");

    }
    console.log(props);
    return (
        <div className="ReviewList" style={{border: '1px solid red',width: '98%'}}>
            <h2>{props.reviewdetailsAdmin.userName}</h2>
            <p>{props.reviewdetailsAdmin.review}</p>
            <button onClick={()=>ReviewDelete(props.reviewdetailsAdmin._id)}>Delete</button>
        </div>
    );
};

export default SeeReviewList; 