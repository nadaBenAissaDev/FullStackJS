import './App.css';  
import React, { Fragment } from 'react';
import {BrowserRouter, Route,Switch} from'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './backend/assets/css/argon-dashboard-react.css';
import Home  from './frontOffice/views/Home';
import BrowseJobs  from './frontOffice/views/BrowseJobs';
import Elearning  from './frontOffice/views/Elearning';
import Blog  from './frontOffice/views/Blog';
import BlogSingle  from './frontOffice/views/BlogSingle';
import Candidates  from './frontOffice/views/Candidates';
import Navbar  from './frontOffice/Layouts/Navbar';
import Footer from 'frontOffice/Layouts/Footer';
import PostJob from 'frontOffice/views/PostJob';
import Login from 'frontOffice/views/Login';
import Register from 'frontOffice/views/Register';
import Admin from 'backend/views/examples/UsersList';
//import Sidebar from 'frontOffice/Layouts/Sidebar'; <Sidebar/>
//import homeQuiz from 'frontOffice/views/homeQuiz';
import QuizInstructions from './frontOffice/views/quiz/QuizInstructions';
import play from './frontOffice/views/quiz/play';
//import profile from './frontOffice/views/Profile'
import QuizSummary from 'frontOffice/views/quiz/QuizSummary';

// Personality Test
import PersonalityTest from 'frontOffice/views/personalityTest/PersonalityTest';
import TestInstructions from 'frontOffice/views/personalityTest/TestInstructions';
import TestResult from 'frontOffice/views/personalityTest/TestResult';
// Personality Test



const App = () => {
    return (
        <div className="App">  
       <BrowserRouter>
       <Fragment>
                   <Navbar/>  
                    <div id="content-wrapper" className="d-flex flex-column">  
                        <div id="content">  
                        <Switch>
                            <Route  exact  path="/" component={Home}></Route>
                            <Route  exact  path="/Home" component={Home}></Route>
                            <Route  exact  path="/Elearning" component={Elearning}></Route>
                            <Route  exact strict path="/BrowseJob" component={BrowseJobs}></Route>
                            <Route  exact path="/Candidates" component={Candidates}></Route>
                            <Route  exact path="/PostJob" component={PostJob}></Route>
                            <Route  exact path="/Blog" component={Blog}></Route>
                            <Route  exact path="/BlogSingle" component={BlogSingle}></Route>
                            
                            <Route  exact  path="/quizSummary" component={QuizSummary}></Route>
                            <Route  exact  path="/Login" component={Login}></Route>
                            <Route  exact  path="/Register" component={Register}></Route>
                            <Route  exact  path="/admin" component={Admin}></Route>
                            <Route  exact  path="/play/instructions" component={QuizInstructions}></Route>
                            <Route  exact  path="/play/quiz" component={play}></Route>
                            {/* Personality Test */}
                            <Route  exact  path="/personalityTest/instructions" component={TestInstructions}></Route>
                            <Route  exact  path="/personalityTest/takeTest" component={PersonalityTest}></Route>
                            <Route  exact  path="/personalityTest/testResult" component={TestResult}></Route>



                            {/* <Route exact path="/Profile" component={profile}></Route> */}
                        </Switch>
                        </div>  
                        <Footer/>  
                    </div>  
               
       </Fragment>
   </BrowserRouter>
   </div>
    );
};

export default App;