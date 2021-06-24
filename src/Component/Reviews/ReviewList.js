import React from 'react';
import "./Review.css"
const ReviewList = (props) => {
    console.log("review ",props)
    return (
        <div className="ReviewSection">
            <h5 style={{borderBottom:"1px solid red"}}>{props.reviewdetails.userName}</h5>
            <p>{props.reviewdetails.review}</p>
        </div>
    );
};

export default ReviewList;