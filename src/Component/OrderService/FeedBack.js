import React from 'react';
import "./OrderService.css"
const FeedBack = () => {
    const HandleReview=(e)=>{
      const review ={
          userName: e.target["ReviewerName"].value,
          review: e.target["Review"].value
      }
      console.log("review ", review);

      const url = `https://frozen-fortress-40113.herokuapp.com/addReview`;
        fetch(url,{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(review)
        }).then(res=> console.log('review ',res))
        e.target["ReviewerName"].value="";
        e.target["Review"].value="";
      e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={HandleReview} className="FeedBackForm">
                <h2>Share your experience with Us</h2>
                <label>Name:</label><br/>
                <input type="text" name="ReviewerName" placeholder="Name"/><br/>
                <label>Review:</label><br/>
                <textarea className="form-control"  name="Review" rows="5" className="col-8"></textarea><br/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default FeedBack;