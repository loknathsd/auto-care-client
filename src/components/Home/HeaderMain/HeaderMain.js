import React from 'react';
import Banner from '../../../images/topbanner.jpg'

const HeaderMain = () => {
    return (
        <div className='container pb-5'>
            <div className="row">
                <div className="col-md-6 mt-4">
                    <h1>The Auto Mechanic <br /> That Comes To You</h1>
                    <p className='lead py-3'>We have experienced mechanics and know how to fix anything wrong with your car.We have the equipment to troubleshoot the problem whatever it may be.</p>
                    <button type="button" className="btn btn-danger mb-5">Learn More</button>
                </div>
                <div className="col-md-6 pb-5 ">
                    <img style={{height:'400px' ,borderRadius:'7px'}} className='img-fluid' src={Banner} alt="" />

                </div>
            </div>
            
        </div>
    );
};

export default HeaderMain;