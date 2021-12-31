import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Footer.css'
import { faFacebookSquare, faInstagramSquare, faLinkedinIn, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div style={{backgroundColor: '#743BFC',color:'white',paddingTop:'30px'}}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <h4>Address</h4>
                        <div className='d-flex mt-3'>
                            <p style={{fontSize: '30px'}}><FontAwesomeIcon icon={faMapMarkerAlt} /></p>
                            <h6 className='ms-3'>H#000(4th floor),Rood #00. <br />Mirpur DOHS , Dhaka , Bangladesh</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h4>Company</h4>
                        <ul className='list-unstyled footer-nav mt-3'>
                            <li  >
                                <Link to="">About</Link>
                            </li>
                            <li>
                                <Link to="">Project</Link>
                            </li>
                            <li>
                                <Link to="">Our Team</Link>
                            </li>
                            <li>
                                <Link to="">Terms Conditions</Link>
                            </li>
                            <li>
                                <Link to="">Submit Listing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    <h4>Quick Links</h4>
                        <ul className='list-unstyled footer-nav mt-3'>
                            <li>
                                <Link to="">Quick Links</Link>
                            </li>
                            <li>
                                <Link to="">Rentals</Link>
                            </li>
                            <li>
                                <Link to="">Sales</Link>
                            </li>
                            <li>
                                <Link to="">Contact</Link>
                            </li>
                            <li>
                                <Link to="">Our blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>About us</h4>
                        <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptatibus!</p>
                        <div className='d-flex social-icon'>
                            <a href='#'  className='p-3'><FontAwesomeIcon icon={faFacebookSquare} /></a>
                            <a href='#' className='p-3'><FontAwesomeIcon icon={faInstagramSquare} /></a>
                            <a href='#' className='p-3'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href='#' className='p-3'><FontAwesomeIcon icon={faYoutubeSquare} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;