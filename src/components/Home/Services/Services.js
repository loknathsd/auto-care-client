import React,{useState,useEffect} from 'react';
import image from '../../../images/topbanner.jpg'
import Service from '../Service/Service';



const Services = () => {
    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch('https://dry-sierra-45415.herokuapp.com/services')
        .then(res => res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id='services' className='container py-4 '>
            <h1 style={{color:'#F63E7B'}} className='text-center text-uppercase'>Our Services</h1>
            <div className='row'>
                {
                    services.map(service =><Service service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;