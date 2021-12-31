import React from 'react';

const Mechanic = ({mechanic}) => {
    return (
        <div className='col-md-3 shadow bg-light p-3 '>
            <img className='img-fluid' src={mechanic.img} alt="" />
            <h4 className='mt-2 text-brand'>{mechanic.name}</h4>
        </div>
    );
};

export default Mechanic;