import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList';
import "./Review.css"
const Reviews = () => {
    const [Reviews,setReviews]= useState([]);
    useEffect(()=>{
        fetch("https://frozen-fortress-40113.herokuapp.com/getReview")
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return (
       <div style={{ paddingTop:"10px",backgroundColor:"#daf5ef"}} className="ReviewParent">
        <h2 style={{color:"#ff0a37"}}>Reviews from our Client</h2>
        <div style={{height:"auto"}} className="Review">
            
            {
                // console.log(Reviews.length)
               Reviews.map(review=><ReviewList reviewdetails={review}></ReviewList>)
            }
        </div>
        </div> 
    );
};

export default Reviews;