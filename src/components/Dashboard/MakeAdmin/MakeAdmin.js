import React from 'react';
import Sidebar from '../Sidebar/Sidebar'
import { useForm } from "react-hook-form";

const MakeAdmin = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.email
        fetch('https://dry-sierra-45415.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(result => {
                alert('You make a admin successfully')
                reset()
            })
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5">
                    <h4 className='mb-4 ms-5 fw-bold'>Make Admin</h4>
                    <div style={{backgroundColor:'#FFF8F5',padding:'40px',height:'350px'}}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="">Email</label>
                            <input className='form-control w-50' placeholder='admin@gmail.com' {...register("email")} />
                            <button type="submit" className='btn btn-primary mt-3'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;