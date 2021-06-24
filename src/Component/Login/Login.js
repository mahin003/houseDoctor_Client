import React, { useContext, useState } from 'react';
import firebaseConfig from '../../firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import "./Login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoodreads, faGoogle } from '@fortawesome/free-brands-svg-icons';

firebase.initializeApp(firebaseConfig);


const Login = () => {

    let loginhistory = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    



 var provider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn=()=>{
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      var user = result.user;
      const userInfo={
        isSignIn:true,
        userName:user.displayName,
        email:user.email   
      }
      setLoggedInUser(userInfo);
      loginhistory.replace(from);
     // console.log("info ", userInfo)
 
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
       console.log(errorMessage);
      // ...
    });

  }
    return (
        <div className="LoginBlock">
          <div className="authLink" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} size="2x" color="red" style={{marginTop:"36px"}}></FontAwesomeIcon> <label  style={{marginTop:"36px"}}>Continue With Google</label><br /></div>
        </div>
    );
};

export default Login;