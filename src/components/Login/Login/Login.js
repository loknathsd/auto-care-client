import React, { useContext, useState } from 'react';
import './login.css'
import logo from '../../../images/icon/autologo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebaseConfig from './firebase.config';
import { initializeApp } from 'firebase/app';
import { ContextUser } from '../../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Navigation from '../../Home/Navigation/Navigation';
import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


const app = initializeApp(firebaseConfig)


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(ContextUser)
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleBlur = e => {
        const newUser = { ...user }
        newUser[e.target.name] = e.target.value;
        setUser(newUser)
    }

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const { register, watch, formState: { errors } } = useForm();


    const handleSubmit = (e) => {
        const auth = getAuth();
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then(result => {
                    const userInfo = { ...user }
                    setUser(userInfo)
                    console.log(userInfo)
                    alert('Your are successfully created account')
                    updateName(user.name)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage, errorCode)

                });
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then(result => {
                    const { displayName, email } = result.user;
                    const userInfo = { name: displayName, email }
                    setLoggedInUser(userInfo)
                    history.replace(from)
                    console.log(userInfo)

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                });
        }
        e.preventDefault();

    }

    const updateName = (name) => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {

        });
    }

    return (
        <div style={{ marginTop: '150px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 mx-auto shadow p-5 bg-secondary rounded text-center">
                        <h2 className='mb-3 text-light'>Please {newUser ? 'Register' : 'Login'}</h2>
                        <form onSubmit={handleSubmit}>

                            {newUser && <input type="text" onBlur={handleBlur} name="name" className='form-control m-2' placeholder='Your name' />}
                            <input type="email" name="email" onBlur={handleBlur} className='form-control m-2' placeholder='Email' />

                            <input type="password" name="password" onBlur={handleBlur} className='form-control m-2' placeholder='Password' />
                            {errors.password && <span>This field is required</span>}

                            <button className='btn btn-primary mt-4' type="submit" >{newUser ? 'SignUp' : 'Login'}</button>
                            <p className='text-light mt-3'>{newUser ? 'Have you an account ?' : "Don't have you an account ?"} <Link onClick={() => setNewUser(!newUser)} className='text-light'>{newUser ? 'Login' : 'SignUp'}</Link></p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;