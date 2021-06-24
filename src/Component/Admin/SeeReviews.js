import React, { useEffect, useState } from 'react';
import SeeReviewList from './SeeReviewList';

const SeeReviews = () => {

    const [reviewAdmin, setReviewAdmin]= useState([]);
    useEffect(()=>{
        fetch("https://frozen-fortress-40113.herokuapp.com/getReview")
        .then(res=>res.json())
        .then(data=>setReviewAdmin(data))
    },[])
    return (
        <div className="adminReview">
            <h1>Reviews</h1>
             {
                //  console.log(reviewAdmin)
                 reviewAdmin.map(reviewadmin=><SeeReviewList reviewdetailsAdmin={reviewadmin}></SeeReviewList>)
             }

        </div>
    );
};

export default SeeReviews;