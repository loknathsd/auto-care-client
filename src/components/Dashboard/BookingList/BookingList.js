import React, { useContext, useEffect, useState } from 'react';
import { ContextUser } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(ContextUser)
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('https://dry-sierra-45415.herokuapp.com/orders?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data))

    }, [])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-4 pt-4">
                    <h4 className='mb-5 ms-5 fw-bold'>Your bookings</h4>
                    <div style={{backgroundColor:'#FFF8F5',padding:'20px'}}>
                        {
                            bookings.length ? <div className="row mt-3">
                                {
                                    bookings.map(booking =>
                                        <div className="card col-md-4 m-3">
                                            <div className="card-body">
                                                <h5>{booking.serviceName}</h5>
                                                <h5 className='text-bold'>${booking.servicePrice}</h5>
                                                <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, expedita!</small>
                                            </div>
                                        </div>

                                    )
                                }
                            </div>
                                :
                                <div className='p-5' >
                                    <h4 className='lead text-center'>No Order Yet</h4>
                                </div>
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};

export default BookingList;