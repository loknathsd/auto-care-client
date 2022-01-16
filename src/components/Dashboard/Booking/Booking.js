import React, { useEffect, useState, useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Book from '../Book/Book';
import { useParams } from 'react-router-dom';
import { ContextUser } from '../../../App';

const Booking = () => {
    const { id } = useParams()
    const [loggedInUser, setLoggedInUser] = useContext(ContextUser)
    const [serviceInfo, setServiceInfo] = useState({})


    useEffect(() => {
        fetch(`https://dry-sierra-45415.herokuapp.com/service/` + id)
            .then(res => res.json())
            .then(data => setServiceInfo(data))
    }, [])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-3">

                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <Book user={loggedInUser} serviceInfo={serviceInfo}  ></Book>
                </div>
            </div>

        </div>
    );
};

export default Booking;