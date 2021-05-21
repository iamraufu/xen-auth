import './SignUp.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
    console.log(user)
  }

  const handleSubmit = (e) => {
    console.log(e);
  }

  return (
    <div className="auth">
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className='fw-bold fs-3'>Create a new account</h1>
        <form style={{width:'350px'}} onSubmit={handleSubmit}>
          <input className='mt-3 w-100 p-2 font-icon' onBlur={handleBlur} type="number" name="phone" placeholder="&#xf3cd; Phone number" required />
          <br />
          <input className='mt-3 w-100 p-2 font-icon' onBlur={handleBlur} type="text" name="name" placeholder="&#xf007; Name" required />
          <br />
          <input className='mt-3 w-100 p-2 font-icon' onBlur={handleBlur} type="email" name="email" placeholder="&#xf0e0; Email" required />
          <br />
          <input className='mt-3 w-100 p-2 font-icon' onBlur={handleBlur} type="password" name="password" placeholder="&#xf084; Password" required />
          <br />
          <input className='mt-3 w-100 p-2' type="submit" value='Sign up' />
        </form>
        <p className='fw-bold mt-3'><i className="fas fa-arrow-alt-circle-left"></i><Link className='text-decoration-none' style={{color:'black'}} to='/login'> Go to back to sign in</Link></p>
      </div>
    </div>

  );
}

export default SignUp;