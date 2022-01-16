import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div style={{marginTop:'140px'}} className="col-md-9 shadow p-5 ">
                        <h1 className='text-center' >Welcome to dashboard</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;