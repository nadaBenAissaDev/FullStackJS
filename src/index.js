// import './frontOffice/styles/styles.scss';
<<<<<<< HEAD
=======
// import './frontOffice/styleSkillsTest/styles.scss';
>>>>>>> 7d2862b2630c643420bbf465d805453e477d7fc9
//  import React from 'react';
//  import ReactDOM from 'react-dom';
//  import 'bootstrap/dist/css/bootstrap.min.css';
//  import $ from 'jquery';
//  import Popper from 'popper.js';
//  import 'bootstrap/dist/js/bootstrap.bundle.min';
//  import './index.css';
//  import App from './App';
<<<<<<< HEAD
=======
//  import reducers from './reducers';
//  import { applyMiddleware, createStore } from 'redux';
// import thunkMiddleware from 'redux-thunk';

//  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
// const store =createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
>>>>>>> 7d2862b2630c643420bbf465d805453e477d7fc9
//  ReactDOM.render(
//    <React.StrictMode>
//      <App />
//    </React.StrictMode>,
//    document.getElementById('root')
<<<<<<< HEAD
//   );
=======
//  );



>>>>>>> 7d2862b2630c643420bbf465d805453e477d7fc9

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