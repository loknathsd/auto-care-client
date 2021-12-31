import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import OrderListTable from './OrderListTable';

const OrderList = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://dry-sierra-45415.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-4 ">
                    <h4 className='my-4 ms-5 fw-bold'>Order list</h4>
                    <div style={{backgroundColor:'#FFF8F5',padding:'30px',height:'350px'}}>
                        <OrderListTable orders={orders}></OrderListTable>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrderList;