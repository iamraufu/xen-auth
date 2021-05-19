import './App.css';
import React from 'react'
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignIn from './components/SignIn/SignIn';

function App() {

  return (
    <Router className='main-container'>
      <Switch>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
