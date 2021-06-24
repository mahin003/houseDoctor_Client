import firebase from "firebase/app";
import "firebase/auth";
import './App.css';
import Header from './Component/Header/Header';
import Services from './Component/Services/Services';
import Reviews from './Component/Reviews/Reviews';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './Component/Admin/Admin';
import Login from './Component/Login/Login';
import { createContext, useContext, useState } from 'react';
import OrderStatus from './Component/Admin/OrderStatus';
import OrderSection from './Component/OrderService/OrderSection';
import OrderDashBoard from './Component/OrderService/OrderDashBoard';
import PrivateRoute from './PrivateRoute';
import Navbar from "./Component/Header/Navbar";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignIn: false,
    userName: '',
    email: ''

  })
  return (

    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>

         <PrivateRoute path="/order/:id">
           <Navbar></Navbar>
              <OrderSection></OrderSection>
              <Footer></Footer>
            </PrivateRoute>

            <Route path="/services">   
              <Navbar></Navbar>
              <Services></Services>
              <Footer></Footer>
            </Route>

            <PrivateRoute path="/admin">
              <Navbar></Navbar>
              <Admin></Admin>
              <Footer></Footer>
            </PrivateRoute>

            <Route path="/orderUser">
            <Navbar></Navbar>
              <OrderDashBoard></OrderDashBoard>
              <Footer></Footer>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="#reviews">
              <Reviews></Reviews>
            </Route>
            <Route path="/login">
            <Navbar></Navbar>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route path="(/|/home)">
              <Header></Header>
              <Services></Services>
              <Reviews></Reviews>
              <Contact></Contact>
              <Footer></Footer>
            </Route>
 


            {/* <Footer></Footer> */}
          </Switch>

        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
