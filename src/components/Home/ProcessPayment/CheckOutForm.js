import React from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckOutForm = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement),
        });
        if (error) {
            console.log('[error]', error)
            setPaymentError(error.message)
            setPaymentSuccess(null)
        }
        else {
            console.log('[PaymentMethod]', paymentMethod)
            setPaymentSuccess(paymentMethod.id)
            setPaymentError(null)
            handlePayment(paymentMethod.id)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className=' form-control py-2 mb-2'>
                        <CardNumberElement />
                    </div>
                </div>
                <div className="row">
                    <div className="col form-control py-2">
                        <CardExpiryElement />
                    </div>
                    <div className="col form-control py-2 ms-2">
                        <CardCvcElement />
                    </div>
                </div>
                <button className='btn btn-primary mt-3' type="submit" disabled={!stripe || !elements}>
                    Pay
                </button>
            </form>

          
        </div>
    );
};


export default CheckOutForm;


