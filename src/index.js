/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

<<<<<<< Updated upstream
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//redux
import {Provider} from 'react-redux';
import store from './store';

 import "backend/assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
 import "backend/assets/scss/argon-dashboard-react.scss";

 import AdminLayout from "backend/layouts/Admin.js";
 import AuthLayout from "backend/layouts/Auth.js";

 ReactDOM.render(
  <Provider  store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Redirect from="/" to="/admin/index" /> 
    </Switch>  
   </BrowserRouter>
   </Provider>,                   
   document.getElementById("root")
 );
>>>>>>> Stashed changes
