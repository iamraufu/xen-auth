import './SignUp.css';
import React from 'react';
import { Link } from 'react-router-dom';
// import { useHistory, useLocation } from 'react-router-dom';

function SignUp() {

  return (
    <div className="auth">
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className='fw-bold fs-3'>Create a new account</h1>
        <form style={{width:'350px'}}>
          <input className='mt-3 w-100 p-2 font-icon' type="number" name="phone" placeholder="&#xf3cd; Phone number" />
          <br />
          <input className='mt-3 w-100 p-2 font-icon' type="text" name="name" placeholder="&#xf007; Name" />
          <br />
          <input className='mt-3 w-100 p-2 font-icon' type="email" name="email" placeholder="&#xf0e0; Email" />
          <br />
          <input className='mt-3 w-100 p-2 font-icon' type="password" name="password" placeholder="&#xf084; Password" />
          <br />
          <input className='mt-3 w-100 p-2' type="submit" value='Sign up' />
        </form>
        <p className='fw-bold mt-3'><i className="fas fa-arrow-alt-circle-left"></i><Link className='text-decoration-none' style={{color:'black'}} to='/login'> Go to back to sign in</Link></p>
      </div>
    </div>

  );
}

export default SignUp;