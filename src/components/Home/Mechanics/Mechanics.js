import React from 'react';
import mechanic1 from '../../../images/mechanic1.jpg'
import mechanic2 from '../../../images/mechanic2.jpg'
import mechanic3 from '../../../images/mechanic3.jpg'
import mechanic4 from '../../../images/mechanic4.jpg'
import Mechanic from '../Mechanic/Mechanic';


const mechanics = [
    {
        img: mechanic1,
        name :'Alex Hales'
     },
     {
        img: mechanic2,
        name :'Winson Henry'
     },
     {
        img: mechanic3,
        name :'Tom Curry'
     },
     {
        img: mechanic4,
        name :'John Mitchel'
     }
]

const Mechanics = () => {
    return (
        <div style={{backgroundColor:'#F5F5FB '}} className='container text-center py-5'>
            <h1 className='text-brand'>Check Out Some Of Our Mechanics</h1>
            <p className='my-4 '>We have experienced mechanics and know how to fix anything wrong with your car. <br /> We have the equipment to troubleshoot the problem whatever it may be.</p>
            <div className="row my-5">
                {
                    mechanics.map(mechanic =><Mechanic mechanic={mechanic}></Mechanic>)
                }
            </div>
        </div>
    );
};

export default Mechanics;