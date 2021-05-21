import React from 'react';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const LoginWithPhone = () => {
      const [user, setUser] = useState({})
      const facebookProvider = new firebase.auth.FacebookAuthProvider();
      const googleProvider = new firebase.auth.GoogleAuthProvider();

      const handleFacebookSignIn = () => {
            firebase
              .auth()
              .signInWithPopup(facebookProvider)
              .then((result) => {
                const credential = result.credential;
                const user = result.user;
                const accessToken = credential.accessToken;
                setUser(user)
                console.log(accessToken, user)
            })
            .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  const email = error.email;
                  const credential = error.credential;
                  console.log(errorCode, errorMessage, email, credential)
            });
            console.log(user)
          }

          const handleGoogleSignIn = () => {
            firebase.auth()
              .signInWithPopup(googleProvider)
              .then((result) => {
                const credential = result.credential;
                const token = credential.accessToken;
                const user = result.user;
                console.log(token, user)
                setUser(user)
              }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)
              });
              console.log(user)
          }
          const handleBlur = (e) => {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
            console.log(user)
      }

      const handleSubmit = (e) => {
            console.log(e);
            e.preventDefault();
      }

      return (
            <div className="auth">
                  <div className="position-absolute top-50 start-50 translate-middle">
                        <h1 className='fw-bold fs-3'>Log In</h1>
                        <form style={{ width: '400px' }} onSubmit={handleSubmit}>
                              <input style={{border:'1px solid #63b3ed'}} className='mt-3 w-100 p-2 font-icon' onBlur={handleBlur} type="number" name="phone" placeholder="&#xf3cd; Phone number" required/>
                              <Link to='/phone-otp'><input className='mt-3 w-100 p-2' type="submit" value='Sign in' /></Link>
                              
                        </form>
                        <div className="d-flex mt-2">
                              <div className="line mt-3"></div>
                              <p className='mt-1 px-1'>or</p>
                              <div className="line mt-3"></div>
                        </div>
                        <Link className='text-decoration-none' style={{ color: 'black' }} to='/login'><p className='forgot-password p-2 fw-bold text-center'>Sign in with password</p></Link>
                        <p className='fw-bold mt-3 text-center'><Link className='text-decoration-none' style={{ color: 'black' }} to='/signup'>Don't have an account? Sign Up</Link></p>
                        <div className="d-flex mt-2">
                              <div className="line mt-3"></div>
                              <p className='mt-1 px-1'>or</p>
                              <div className="line mt-3"></div>
                        </div>
                        <div className="d-flex text-center">
                              <div className="facebook mt-3">
                              <i style={{cursor:'pointer'}} className="fab fa-facebook p-2 text-white" onClick={handleFacebookSignIn}> Sign In with Facebook</i> 
                              </div>
                              <div className="google mt-3 ms-2">
                              <i style={{cursor:'pointer'}} className="fab fa-google p-2 text-white" onClick={handleGoogleSignIn}> Sign In with Google</i> 
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default LoginWithPhone;