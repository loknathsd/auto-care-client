import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';



const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
        <CheckOutForm handlePayment={handlePayment}></CheckOutForm>
      </Elements>
    );
};

export default ProcessPayment;