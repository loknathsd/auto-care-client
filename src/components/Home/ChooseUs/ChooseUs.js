import React from 'react';
import icon1 from '../../../images/icon/everyjob.jpg'
import icon2 from '../../../images/icon/metals.jpg'
import icon3 from '../../../images/icon/standard.jpg'


const ChooseUs = () => {
    return (
      <section style={{backgroundColor:'#F5F5FB'}}>
          <div className="container my-5 py-5">
              <div className="row">
                  <div className="col-md-5 mt-4"> 
                     <h1 className='text-brand'>WHY CHOOSE US?</h1>
                     <p className='lead text-secondary my-4'>Just tell us what maintenance and auto repair services you need and we will send a fixed quote .One of our mobile mechanic will come out do a diagnostic visit and create a quote for you</p>
                     <button type="button " className="btn btn-danger mb-5">Learn More</button>

                  </div>
                  <div className="col-md-6 ms-5">
                      <div className='row'>
                          <div className="col-md-2">
                              <img className='img-fluid mt-2' src={icon1} alt="" />
                          </div>
                          <div className="col-md-10">
                              <h5 className="text-brand">EVERY JOB IS PERSONAL</h5>
                              <p className='text-secondary'>If you want the quality you would expect from the dealership, but with a more personal and friendly atmosphere, you have found it.</p>
                          </div>
                          
                      </div>
                      <div className='row my-3'>
                          <div className="col-md-2">
                              <img className='img-fluid d-flex mt-2' src={icon2} alt="" />
                          </div>
                          <div className="col-md-10">
                              <h5 className="text-brand">BEST MATERIALS</h5>
                              <p>We have invested in all the latest specialist tools and diagnostic software that is specifically tailored for the software in your vehicle.</p>
                          </div>
                          
                      </div>
                      <div className='row'>
                          <div className="col-md-2">
                              <img className='img-fluid mt-2' src={icon3} alt="" />
                          </div>
                          <div className="col-md-10">
                              <h5 className="text-brand">PROFESSIONAL STANDARDS</h5>
                              <p>Our auto repair shop is capable of servicing a variety of models. We only do the work that is needed to fix your problem.</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
};

export default ChooseUs;