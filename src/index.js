<<<<<<< Updated upstream
=======
// import './frontOffice/styles/styles.scss';
>>>>>>> Stashed changes
// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import './index.css';
// import App from './App';
<<<<<<< Updated upstream
// import reportWebVitals from './reportWebVitals';

// import './frontOffice/styles/styles.scss';

=======
>>>>>>> Stashed changes
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
<<<<<<< Updated upstream
// );

// reportWebVitals();


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
=======
// ); 


 import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//redux
import {Provider} from 'react-redux';
import store from './store';
>>>>>>> Stashed changes

 import "backend/assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
 import "backend/assets/scss/argon-dashboard-react.scss";

 import AdminLayout from "backend/layouts/Admin.js";
 import AuthLayout from "backend/layouts/Auth.js";

<<<<<<< Updated upstream

 ReactDOM.render(
=======
 ReactDOM.render(
  <Provider  store={store}>
>>>>>>> Stashed changes
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Redirect from="/" to="/admin/index" /> 
    </Switch>  
<<<<<<< Updated upstream
   </BrowserRouter>,                   
   document.getElementById("root")
 );
=======
   </BrowserRouter>
   </Provider>,                   
   document.getElementById("root")
 ); 
>>>>>>> Stashed changes
