import React from 'react';

const Review = ({review}) => {
    const {name,company,description,img} = review
    return (
        <div className='col-md-4 my-5'>
            <div className='d-flex my-3'>
                <img  style={{height:'80px', width:"80px", borderRadius: '50px'}} src={img} alt="" />
                <div className='ms-3 mt-2 '>
                    <h4 className='text-brand fw-bold '>{name}</h4>
                    <p className='fw-bold'>{company}</p>
                </div>
            </div>
            <p className='text-secondary'>{description}</p>
            
        </div>
    );
};

export default Review;