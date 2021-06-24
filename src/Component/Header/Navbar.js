import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import "./Header.css"
const Navbar = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
   
    
    return (
       <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                <a class="navbar-brand font-weight-bold name" style={{ fontSize: "30px" }} href="#">House Doctors</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto d-flex align-items-center">
                        <li class="nav-item active mr-4">
                        <Link to="/home" class="nav-link" >
                              Home<span class="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li class="nav-item mr-4">
                            <Link to="/services" class="nav-link" >
                                Services
                            </Link>
                        </li>
                        <li class="nav-item mr-4">
                            <Link to="/orderUser" class="nav-link" >
                                Dashboard
                            </Link>

                        </li>
                        <li class="nav-item mr-4">
                            <Link to="/admin" class="nav-link" >Admin</Link>

                        </li>
                        <li class="nav-item mr-4">
                            {
                                loggedInUser.isSignIn ? <Link to="/" class="nav-link" >
                                    <button onClick={() => setLoggedInUser({})} class="btn btn-success">{loggedInUser.userName}</button>
                                </Link> : <Link to="/login" class="nav-link" >
                                    <button class="btn btn-success">Log In</button>
                                </Link>
                            }

                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;