<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
=======
import './App.css';  
import React, { Fragment, useEffect } from 'react';
import {BrowserRouter, Route,Switch} from'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout  from './frontOffice/Layouts/Layout';
import Home  from './frontOffice/views/Home';
import BrowseJobs  from './frontOffice/views/GJob/BrowseJobs';
import Elearning  from './frontOffice/views/Elearning';
import Blog  from './frontOffice/views/Blog';
import BlogSingle  from './frontOffice/views/BlogSingle';
import Candidates  from './frontOffice/views/Candidates';
import DetailJob  from './frontOffice/views/GJob/DetailJob';
//import Navbar  from './frontOffice/Layouts/Navbar';<Navbar/> 
//import Footer from 'frontOffice/Layouts/Footer';   <Footer/>
import Login from 'frontOffice/views/GUser/Login';
import Register from 'frontOffice/views/GUser/Register';
import Admin from 'backend/views/examples/UsersList';
//import Header from 'frontOffice/Layouts/Header';  <Header/>
//import Sidebar from 'frontOffice/Layouts/Sidebar';                        <Sidebar/>
//redux
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth'; 
import setAuthToken from './utils/setAuthToken';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

<<<<<<< Updated upstream
=======
const App = () => {
    useEffect(() =>{
        store.dispatch(loadUser());
    }, []); //component didMount
    return (
    <Provider store={store}>
 <div className="App">  
       <BrowserRouter>
       <Fragment>
                    <div id="content-wrapper" className="d-flex flex-column">  
                        <div id="content">  
                        <Switch>
                            <Route  exact  path="/" component={Home}></Route>
                            <Route  exact  path="/Home" component={Home}></Route>
                            <Route  exact  path="/Elearning" component={Elearning}></Route>
                            <Route  exact strict path="/BrowseJob" component={BrowseJobs}></Route>
                            <Route  exact path="/Candidates" component={Candidates}></Route>
                            <Route  exact path="/Blog" component={Blog}></Route>
                            <Route  exact path="/BlogSingle" component={BlogSingle}></Route>
                            <Route  exact  path="/Login" component={Login}></Route>
                            <Route  exact  path="/Register" component={Register}></Route>
                            <Route  exact  path="/admin" component={Admin}></Route>
                            <Route  exact  path="/DetailJob/:id" component={DetailJob}></Route>
                        </Switch>
                        </div>  
                         
                    </div>  
                  
       </Fragment>
   </BrowserRouter>
   </div>
    </Provider>   
);
};

>>>>>>> Stashed changes
export default App;
