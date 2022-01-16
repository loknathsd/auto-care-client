import React, { useEffect, useState } from 'react';
import image from '../../../images/mechanic1.jpg'
import Review from '../Review/Review';




const Reviews = () => {
    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://dry-sierra-45415.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div id='reviews' className='container my-5 py-5 '>
            <h1 style={{color: '#F63E7B'}} className='text-center mb-5'>REVIEWS</h1>
            <div className="row pb-5">
                {
                    reviews.map(review=><Review review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;