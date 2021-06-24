import { faFirstOrder } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faHistory, faMinus, faPlus, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import AddService from './AddService';
import "./ADmin.css";
import DeleteService from './DeleteService';
import OrderStatus from './OrderStatus';
import SalesList from './SalesList';
import SeeReviews from './SeeReviews';
const Admin = () => {
    return (

        <div className="AdminPanel">
            <div className="AdminMenu " >
                <div><FontAwesomeIcon icon={faPlus} size="2x" color="white"></FontAwesomeIcon> <Link to="/admin/addService">Add Services</Link></div>
                <div><FontAwesomeIcon icon={faMinus}size="2x" color="white"></FontAwesomeIcon> <Link to="/admin/deleteservice">Delete Services</Link></div>
                <div><FontAwesomeIcon icon={faFirstOrder}size="2x" color="white"></FontAwesomeIcon> <Link to="/admin/orderstatus">Service Request</Link></div>
                <div><FontAwesomeIcon icon={faHistory}size="2x" color="white"></FontAwesomeIcon> <Link to="/admin/saleslist">History</Link></div>
                <div><FontAwesomeIcon icon={faComment}size="2x" color="white"></FontAwesomeIcon> <Link to="/admin/seereviews">See Reviews</Link></div>
            </div>
            <div className="AdminActivities ">
               
                        <Route path="/admin/addService">
                            <AddService></AddService>
                        </Route>
                        <Route path="/admin/deleteservice">
                            <DeleteService></DeleteService>
                        </Route>
                        <Route path="/admin/orderstatus">
                            <OrderStatus></OrderStatus>
                        </Route>
                        <Route path="/admin/saleslist">
                            <SalesList></SalesList>
                        </Route>
                        <Route path="/admin/seereviews">
                            <SeeReviews></SeeReviews>
                        </Route>
               

            </div>
        </div>

    );
};

export default Admin;