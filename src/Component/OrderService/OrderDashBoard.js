import React, { useContext } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import FeedBack from './FeedBack';
import ServiceStatus from './ServiceStatus';
import "./OrderService.css"
import { UserContext } from '../../App';
import PendingSeervice from './PendingSeervice';
import PrivateRoute from '../../PrivateRoute';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faHistory, faSpinner, faTabletAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
const OrderDashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="OrderDashboard">
            <div className="OrderUserMenu ">
                <div><FontAwesomeIcon icon={faComments} size="2x" color="white"></FontAwesomeIcon> <Link to='/orderUser/feedback'>Give Feedback</Link></div> 
                <div><FontAwesomeIcon icon={faHistory} size="2x" color="white"></FontAwesomeIcon> <Link to={`/orderUser/serviceHistory/${loggedInUser.userName}`}>Service History</Link></div> 
                <div><FontAwesomeIcon icon={faSpinner} size="2x" color="white"> </FontAwesomeIcon> <Link to={`/orderUser/pendingService/${loggedInUser.userName}`}>Pending Orders</Link></div> 
            </div>
            <div className="OrderUserFeature ">
                   <Switch>    
                    <Route path='/orderUser/feedback'>
                        <FeedBack></FeedBack> 
                    </Route>
                    <Route path='/orderUser/serviceHistory/:Username'>
                        <ServiceStatus></ServiceStatus>
                    </Route>
                    <PrivateRoute path='/orderUser/pendingService/:Username'>
                        <PendingSeervice></PendingSeervice>
                    </PrivateRoute>
                    </Switch>
             
            </div>
        </div>
    );
};

export default OrderDashBoard;