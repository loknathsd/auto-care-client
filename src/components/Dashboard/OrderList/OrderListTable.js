import React from 'react';

const OrderListTable = ({orders}) => {
    return (
        <table className='table bg-white '>
            <thead>
                <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Service</th>
                    <th scope='col'>Pay with</th>
                   
                </tr>
            </thead>
            <tbody>
               {
                   orders.map(order=>
                    <tr>
                    <td>{order.userName}</td>
                    <td>{order.userEmail}</td>
                    <td>{order.serviceName}</td>
                    <td>{order.paymentBy}</td>
                    <td></td>
                </tr>)
               }
            </tbody>
            
        </table>
    );
};

export default OrderListTable;