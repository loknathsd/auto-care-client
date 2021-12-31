import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProcessPayment from '../../Home/ProcessPayment/ProcessPayment';

const Book = ({ user, serviceInfo }) => {
    const [paymentBy, setPaymentBy] = useState({})

    const { title, price } = serviceInfo;
    const { name, email } = user;

    const handlePaymentSuccess = (paymentId) => {
        const orderDetails = {
            userName: name,
            userEmail: email,
            serviceName: title,
            servicePrice: price,
            paymentBy: paymentBy,
            paymentId,
        }
        fetch('https://dry-sierra-45415.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(result => {
                console.log(result)
            })
    }

    const handleChange = (e) => {
        setPaymentBy(e.target.value)
    }
    return (
        <section className='mt-5'>
            <div>
                <h4 className='mb-4 ms-5 fw-bold'>Book</h4>
                <div style={{backgroundColor:'#FFF8F5',padding:'40px'}}>
                    <form className='w-50' >
                        <div class="form-group">
                            <input name='name' defaultValue={name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your name" />
                        </div>
                        <div class="form-group">
                            <input name='email' defaultValue={email} type="email" class="form-control my-2" id="exampleInputPassword1" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <input name='serviceName' type="text" defaultValue={title} class="form-control" id="exampleInputPassword1" placeholder="Sevice" />
                        </div><br />
                        <p>Your Service charged will be ${price}</p>
                        <h5 className='mb-3'>Pay with</h5>
                        <div class="form-check form-check-inline">
                            <input onChange={handleChange} name="paymentBy" class="form-check-input" type="radio" id="inlineRadio1" value="Credit Card" />
                            <label class="form-check-label" for="inlineRadio1">Credit Card</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input onChange={handleChange} name="paymentBy" class="form-check-input" type="radio" id="inlineRadio2" value="Paypal" />
                            <label class="form-check-label" for="inlineRadio2">Paypal</label>
                        </div>

                    </form>
                    <div className='w-50 mt-3'>

                        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Book;