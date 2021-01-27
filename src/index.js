import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as ServiceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login'
import SignupComponent from './signup/signup'
import DashboardComponent from './dashboard/dashboard'



const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBgxYoqiRPJTprUDs6REhPfNSfqKOp6qUE",
  authDomain: "chat-app-9ced7.firebaseapp.com",
  projectId: "chat-app-9ced7",
  storageBucket: "chat-app-9ced7.appspot.com",
  messagingSenderId: "417130787562",
  appId: "1:417130787562:web:df69fcf18bcf66e11edd93",
  measurementId: "G-QHL8CZZXW6"
});

const routing = (
  <Router>
    <div id='routing-container'>
  <Route path='/login' component={LoginComponent}></Route>
  <Route path='/signup' component={SignupComponent}></Route>
  <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
)


ReactDOM.render( routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ServiceWorker.unregister();