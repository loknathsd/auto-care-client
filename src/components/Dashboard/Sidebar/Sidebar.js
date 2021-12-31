import React, { useContext, useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../../images/icon/autologo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCommentDots, faGripHorizontal, faList, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ContextUser } from '../../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(ContextUser)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://dry-sierra-45415.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
        <div>
            <div className='d-flex'>
                <img style={{ height: '80px', marginTop: '20px' }} src={logo} alt="" />
                <h1 className='pt-4 mt-1'>AutoCare </h1>
            </div>
            <ul className='list-unstyled sidebar  bg-light p-3 fw-bold '>
                <li>
                    <Link to="/home"> <span className='text-danger p-2'> <FontAwesomeIcon icon={faShoppingCart} /> </span> Book</Link>
                </li>
                <li>
                    <Link to="/dashboard/bookingList"><span className='text-danger p-2'> <FontAwesomeIcon icon={faList} /> </span> Booking List</Link>
                </li>
                <li>
                    <Link to="/dashboard/review"><span className='text-danger p-2'> <FontAwesomeIcon icon={faCommentDots} /> </span> Review</Link>

                </li>
               { isAdmin &&  <div>
                    <li>
                        <Link to="/dashboard/orderList"> <span className='text-danger p-2'> <FontAwesomeIcon icon={faBars} /> </span> Order list</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/addService"> <span className='text-danger p-2'> <FontAwesomeIcon icon={faPlus} /> </span> Add Service</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/makeAdmin"><span className='text-danger p-2'> <FontAwesomeIcon icon={faUserPlus} /> </span> Make Admin</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/manageServices"> <span className='text-danger p-2'> <FontAwesomeIcon icon={faGripHorizontal} /> </span> Manage Services</Link>
                    </li>
                </div>}
            </ul>
        </div>
    );
};

export default Sidebar;