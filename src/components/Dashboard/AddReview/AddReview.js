import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

const AddReview = () => {
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleImageUpload = e => {
        console.log(e.target.files[0])
        const imageData = new FormData()
        imageData.set('key', '27857de30973670589e3e40a5817902c')
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(result => {
                console.log(result.data.data.display_url)
                setImageURL(result.data.data.display_url)
            })
            .catch(err => console.log(err))
    }

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            company: data.company,
            description: data.description,
            img: imageURL
        }
        console.log(reviewData)
        fetch('https://dry-sierra-45415.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
    }
    return (
        <section className='container'>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <h4 className='mt-5 ms-5 fw-bold'>Review</h4>
                    <div style={{backgroundColor:'#FFF8F5' ,padding:'30px',height:'350px',marginTop:'25px'}}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="">Name</label>
                                    <input className='form-control' placeholder='Your Name'  {...register("name")} />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Upload Your Image</label>
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
                                    <label htmlFor="">Your Company name ,Designation</label>
                                    <input type="text" placeholder='Company name' className='form-control ' {...register("company", { required: true })} />
                                    {errors.price && <span>This field is required</span>}
                                </div>
                            </div>

                            <button type='submit' className='btn btn-primary mt-2'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AddReview;