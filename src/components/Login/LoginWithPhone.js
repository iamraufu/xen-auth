import React from 'react';
import { Link } from 'react-router-dom';

const LoginWithPhone = () => {
      return (
            <div className="auth">
                  <div className="position-absolute top-50 start-50 translate-middle">
                        <h1 className='fw-bold fs-3'>Log In</h1>
                        <form style={{ width: '400px' }}>
                              <input style={{border:'1px solid #63b3ed'}} className='mt-3 w-100 p-2 font-icon' type="number" name="phone" placeholder="&#xf3cd; Phone number" />
                              <input className='mt-3 w-100 p-2' type="submit" value='Sign in' />
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
                              <i className="fab fa-facebook p-2 text-white"> Sign In with Facebook</i> 
                              </div>
                              <div className="google mt-3 ms-2">
                              <i className="fab fa-google p-2 text-white"> Sign In with Google</i> 
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default LoginWithPhone;