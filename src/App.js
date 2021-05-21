import './App.css';
import React from 'react'
import SignUp from './components/SignUp/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import LoginWithPhone from './components/Login/LoginWithPhone';
import EmailOTP from './components/Login/EmailOTP';
import PhoneOTP from './components/Login/PhoneOTP';

function App() {

  return (
    <Router className='main-container'>
      <Switch>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/'>
          <SignUp />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/phone-login'>
          <LoginWithPhone />
        </Route>
        <Route path='/email-otp'>
          <EmailOTP />
        </Route>
        <Route path='/phone-otp'>
          <PhoneOTP />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
