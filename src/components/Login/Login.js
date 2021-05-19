import './Login.css';
import React, { useState } from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';
import firebase from 'firebase'


function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    phone: '',
    name: '',
    email: '',
    password: ''
  });

  initializeLoginFramework();
  // eslint-disable-next-line
  // const history = useHistory();
  // const location = useLocation();
  // let { from } = location.state || { from: { pathname: "/" } };

  // const googleSignIn = () => {
  //     handleGoogleSignIn()
  //     .then(res => {
  //       handleResponse(res, true);
  //     })
  // }

  // const fbSignIn = () => {
  //     handleFbSignIn()
  //     .then(res => {
  //       handleResponse(res, true);
  //     })

  // }

  // const signOut = () => {
  //     handleSignOut()
  //     .then(res => {
  //         handleResponse(res, false);
  //     })
  // }

  const handleResponse = (res, redirect) => {
    setUser(res);
    if (redirect) {
      // history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
      console.log(user)
    }
  }
  const handleSubmit = (e) => {
    
    if (newUser && user.phone && user.password) {
      createUserWithEmailAndPassword(user.phone,user.name, user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      }
    });

    const onSignInSubmit =(e)=>{
      e.preventDefault();
      const phoneNumber = user.phone;
const appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });

    } 
    e.preventDefault();
  }



  return (

    <div className="position-absolute top-50 start-50 translate-middle" style={{textAlign: 'center'}}>
      {/* { user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
        <button onClick={googleSignIn}>Sign In</button>
      }
      <br/>
      <button onClick={fbSignIn}>Sign in using Facebook</button>
      {
        user.isSignedIn && <div>
          <p>Welcome, {user.name}!</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt=""/>
        </div>
      } */}

      <h1 className='fw-bold'>Create a new account</h1>
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">New User Sign up</label>
      <form onSubmit={handleSubmit}>
        {
          newUser && <div className="">
            {/* <input className='mt-3 w-100 p-2 font-icon' type="number" name="phone" onBlur={handleBlur} placeholder="&#xf3cd; Phone number" required /> */}
            <input className='mt-3 w-100 p-2 font-icon' type="text" name="name" onBlur={handleBlur} placeholder="&#xf007; Name" required />
            <input className='mt-3 w-100 p-2 font-icon' type="email" name="email" onBlur={handleBlur} placeholder="&#xf0e0; Email" required />
            {/* <input className='mt-3 w-100 p-2 font-icon' type="password" name="password" onBlur={handleBlur} placeholder="&#xf084; Password" required />  */}
          </div>
        }
        <input className='mt-3 w-100 p-2 font-icon' type="number" name="phone" onBlur={handleBlur} placeholder="&#xf3cd; Phone number" required />
        <input className='mt-3 w-100 p-2 font-icon' type="password" name="password" onBlur={handleBlur} placeholder="&#xf084; Password" required />
        <input className='mt-3 w-100 p-2' type="submit" value={newUser ? 'Sign up' : 'Sign in with password'} />
      </form>
      <p className='text-danger mt-3'>{user.error}</p>
        { user.success && <p className='text-success'>User { newUser ? 'Created' : 'Logged In'} Successfully!</p>}
    </div>

    // <div className="auth position-absolute top-50 start-50 translate-middle">
    //   <h1 className='text-center fw-bold'>Create a new account</h1>
    //   <form onSubmit={handleSubmit}>
    //     <input className='mt-3 w-100 p-2 font-icon' type="number" name="phone" onBlur={handleBlur} placeholder="&#xf3cd; Phone number" />
    //     <br />
    //     <input className='mt-3 w-100 p-2 font-icon' type="text" name="name" onBlur={handleBlur} placeholder="&#xf007; Name" />
    //     <br />
    //     <input className='mt-3 w-100 p-2 font-icon' type="email" name="email" onBlur={handleBlur} placeholder="&#xf0e0; Email" />
    //     <br />
    //     <input className='mt-3 w-100 p-2 font-icon' type="password" name="password" onBlur={handleBlur} placeholder="&#xf084; Password" />
    //     <br />
    //     <input className='mt-3 w-100 p-2' type="submit" value='Sign up' />
    //   </form>
    //   <p className='text-danger'>{user.error}</p>
    //   { user.success && <p className='text-success'>User {newUser ? 'created' : 'Logged In'} successfully</p>}
    //   <p className='fw-bold mt-3 cursor-pointer'><i className="fas fa-arrow-alt-circle-left"></i> Go to back to sign in</p>
    // </div>

  );
}

export default Login;