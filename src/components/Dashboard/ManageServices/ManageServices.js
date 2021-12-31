import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar'

const ManageServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://dry-sierra-45415.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDeleteButton = (id) => {
        console.log(id, 'i am clicked')
        fetch(`https://dry-sierra-45415.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })

    }
    return (
        <div className='container'>
            <div className="row ">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5 ">
                    <h4 className='mb-4 ms-5 fw-bold'>Manage Services</h4>
                    <div style={{backgroundColor:'#FFF8F5',padding:'20px',height:'350px'}}>
                        <table className='table table-borderless mt-3 bg-white'>
                            <thead>
                                <tr>
                                    <th>Service Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map(service =>
                                        <tr>
                                            <td>{service.title}</td>
                                            <td>${service.price}</td>
                                            <td><button onClick={() => handleDeleteButton(service._id)} className='btn btn-danger'>delete</button></td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageServices;