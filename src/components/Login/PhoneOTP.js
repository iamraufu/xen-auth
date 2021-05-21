import React from 'react';
import { Link } from 'react-router-dom';

const PhoneOTP = () => {
      return (
            <div className="auth">
                  <div className="position-absolute top-50 start-50 translate-middle">
                        <p className='fs-4 text-center'><i class="fas fa-mobile-alt"></i> OTP has been sent your <span className='fw-bold'>PHONE</span></p>
                        <form style={{ width: '400px' }}>
                              <input style={{borderBottom:'1px solid #63b3ed'}} className='mt-3 w-100 p-2 font-icon text-center' type="number" name="otp" placeholder="&#xf3cd; SMS OTP" />
                              <input className='mt-3 w-100 p-2' type="submit" value='Submit' />
                        </form>
                        <div className="d-flex mt-2">
                              <div className="line mt-3"></div>
                              <p className='mt-1 px-1'>or</p>
                              <div className="line mt-3"></div>
                        </div>
                        <Link className='text-decoration-none' style={{ color: 'black' }} to='/email-otp'><p className='forgot-password p-2 fw-bold text-center'><i class="fas fa-mobile-alt"></i> Send OTP to my email</p></Link>
                        <p className='fw-bold mt-3'><i className="fas fa-arrow-alt-circle-left"></i><Link className='text-decoration-none' style={{color:'black'}} to='/login'> Go to back to sign in</Link></p>
                  </div>
            </div>
      );
};

export default PhoneOTP;