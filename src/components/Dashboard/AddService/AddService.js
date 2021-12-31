import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

const AddService = () => {
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {

        const serviceData = {
            title: data.title,
            description: data.description,
            price: data.price,
            img: imageURL
        }
        console.log(serviceData)
        fetch('https://dry-sierra-45415.herokuapp.com/addService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
    }

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '27857de30973670589e3e40a5817902c')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(response => {
                setImageURL(response.data.data.display_url)
                console.log(response.data.data.display_url)
            })
            .catch(err => {
                console.log(err)
            })


    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9">
                        <h4 className='mt-5 mb-4 ms-5 fw-bold'>Add Service</h4>
                        <div style={{backgroundColor:'#FFF8F5',padding:'30px',height:'350px'}}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="">Service title</label>
                                        <input className='form-control' placeholder='Enter title'  {...register("title")} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="">Upload Image</label>
                                        <input onChange={handleImageUpload} type="file" className='form-control' />

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="">Description</label>
                                        <textarea placeholder='Description' className='form-control ' {...register("description", { required: true })} />
                                        {errors.description && <span>This field is required</span>}
                                    </div>
                                    <div className="col">
                                        <label htmlFor="">Price</label>
                                        <input type="text" placeholder='Enter Price' className='form-control ' {...register("price", { required: true })} />
                                        {errors.price && <span>This field is required</span>}
                                    </div>
                                </div>

                                <button type='submit' className='btn btn-primary mt-2'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AddService;