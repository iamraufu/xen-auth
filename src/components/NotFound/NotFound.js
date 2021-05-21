import './NotFound.css';
import React from 'react';

const NotFound = () => {

      return (
            <div className='not-found'>
                  <h1 style={{fontSize:'8rem'}} className='text-center mt-2 brand fw-bold text-danger'>4 0 4</h1>
                  <h2 className='text-center text-danger fw-bold mt-3'>There's NOTHING here...</h2>
                  <p className='text-center text-danger fw-bold mt-2'>Maybe the page you're looking for is not found or never existed</p>
                  <a className='text-decoration-none' href="/">
                  <button className='btn hvr-sweep-to-bottom mx-auto d-block mt-2'><i class="fas fa-home"></i> Back To Home</button>
                  </a>
            </div>
      );
};

export default NotFound;