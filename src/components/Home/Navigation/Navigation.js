import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { ContextUser } from '../../../App';
import logo from '../../../images/icon/autologo.png'
import './Navigation.css'
import { getAuth, signOut } from "firebase/auth";

const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useContext(ContextUser)

  const history = useHistory()

  const handleLoginButton = () => {
    history.push('/login')
  }

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
       const signOut = {
         name: '',
         email: '',
         password:''
       }
       setLoggedInUser(signOut)
    }).catch((error) => {
      
    });
  }

  return (
    <Navbar bg="" expand="lg" className='mb-5 pb-3'>
      <Container>
        <Navbar.Brand href="#home">
          <div className='d-flex text-light'>
            <img style={{ height: '80px', }} src={logo} alt="" />
            <h1 className='pt-3'>AutoCare </h1>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-area">
            <Nav.Link className='text-light fw-bold' active href="#home">Home</Nav.Link>
            <Nav.Link className='text-light fw-bold' active href="#services">Services</Nav.Link>
            <Nav.Link className='text-light fw-bold' active href="#reviews">Reviews</Nav.Link>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <Nav.Link className='text-light fw-bold' active href="#contact">Contact Us</Nav.Link>

          </Nav>
          {loggedInUser.email ? <h4 className='mt-2 p-3'>{loggedInUser.name}</h4> : <button onClick={handleLoginButton} class="btn btn-danger text-white" >Login</button>}
          {loggedInUser.email && <button onClick={handleSignOut} className='btn btn-danger'>SignOut</button>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;