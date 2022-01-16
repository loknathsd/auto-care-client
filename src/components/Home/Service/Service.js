import React from 'react';
import { useHistory } from 'react-router-dom';

const Service = ({ service }) => {
    const {img,title,price,description,_id} = service
       const history = useHistory()
    const handleServiceBook =(id)=>{
         history.push(`/dashboard/book/${id}`)
    }
    return (
        <div className='col-md-4  my-3'>
            <div onClick={()=>handleServiceBook(_id)} className="card text-center ">
                <div className="card-body">
                    <img className='img-fluid' src={img} alt="" />
                    <h3 className='text-brand mt-2'>{title}</h3>
                    <h4 style={{color:'#F63E7B' ,fontWeight:'bold'}}>$ {price}</h4>
                    <p className='text-secondary'>{description}</p>
                </div>
            </div>

        </div>
    );
};

export default Service;