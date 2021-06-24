import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        <div style={{height:"auto",border: "5px solid grey",borderRadius:"20px"}}>
            <h2>Contact US !!!</h2>
            <form className="formContact">
                <input type="text" placeholder="Name"/><br/>
                <input type="email" placeholder="E-mail"/><br/>
                <input type="text" placeholder="Message"/><br/>
                <button disabled>Send</button>
            </form>
        </div>
    );
};

export default Contact;