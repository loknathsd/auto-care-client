import React, { useContext } from 'react';
import './login.css'
import logo from '../../../images/icon/autologo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { initializeApp } from 'firebase/app';
import { ContextUser } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';


const app = initializeApp(firebaseConfig)
const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(ContextUser)
    const provider = new GoogleAuthProvider();
    const history =useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const {displayName,email} = user;
                const userInfo = {name:displayName,email}
                setLoggedInUser(userInfo)
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
            });


    }
    return (
        <div className='container text-center login-area'>
            <div className='d-flex'>
                <img style={{ height: '80px', marginTop: '35px' }} src={logo} alt="" />
                <h1 className='pt-5'>AutoCare </h1>
            </div>
              
            <h1 className='mt-5 pt-5'>Log In</h1>
            <button onClick={handleGoogleSignIn} className='btn btn-danger mt-3'> <FontAwesomeIcon style={{ marginRight: '40px', fontSize: '35px' }} icon={faGoogle} /> Continue With Google</button>
        </div>
    );
};

export default Login;