import React from 'react';

const ContactUs = () => {
    return (
        <div id='contact' style={{backgroundColor:'#F5F5FB '}} className='container py-5 mb-5 '>
            <h1 className='text-center mb-5 text-brand'>CONTACT US</h1>
            <form style={{width:'50%',margin:'auto',textAlign:'center'}} >
                <div class="mb-3">
                    <input type="email" class="form-control" placeholder='Email Address' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <input type="text" placeholder='Subject*' class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <textarea placeholder='Message*' name="" id=""  rows="5" className='form-control'></textarea>
                </div>
               
                <button type="submit" class="btn btn-primary form-control">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;