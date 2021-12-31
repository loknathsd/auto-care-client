import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../images/icon/autologo.png'
const Navbar = () => {
    const history = useHistory()
    const handleLoginButton=()=>{
            history.push('/admin')
    }
    return (
        <div className='container mb-5 pb-5'>
            <div className='d-flex'>
                <img style={{height:'80px',marginTop:'35px'}} src={logo} alt="" />
                <h1 className='pt-5'>AutoCare </h1>
            </div>

            <nav style={{marginTop:'-50px'}}>
                <ul class="nav justify-content-end ">
                    <li class="nav-item">
                        <Link to="" class="nav-link text-white active" aria-current="page" >Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="" class="nav-link text-white" >Services</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="" class="nav-link text-white " >Reviews</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/admin" class="nav-link text-white ">Dashboard</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="" class="nav-link text-white ">Contact Us</Link>
                    </li>
                    <li class="nav-item">
                        <button onClick={handleLoginButton}  class="btn btn-danger text-white" >Login</button>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Navbar;