import React from 'react';
import { Link } from "react-router-dom";
import bg from '../../frontOffice/assets/images/bg_1.jpg';
import {Helmet} from 'react-helmet';

import Header from '../Layouts/Header';
import { Icon, InlineIcon } from '@iconify/react';
import cubeOutline from '@iconify-icons/mdi/cube-outline';



const Elearning = () => {
    return (
      <>
    
	
         <Helmet><title>E-LEARNING CLASSROOM</title></Helmet>
         <Header/>
        <div id="home">
                    <section>
                        <div style={{ textAlign: 'center' }}>
                            <span className="mdi mdi-cube-outline "><Icon className="mdi mdi-cube-outline cube"icon={cubeOutline} /></span>
                        </div>
                        <h1> Quiz</h1>
                       
                        <div className="auth-Container">
                            <Link to="/play/instructions" className="btn-grad" id="login-B utton"> Skills Test</Link>
                            <Link to="/register" className="btn-grad" id="signup-Button"> Personality Test</Link>
                        </div>
                    
                       
                    </section>
                </div>
    

</>
    );
};

export default Elearning;

/*  <div className="play-Button-Container">
                            <ul>
                                <Link className="play-button"  to="/play/instructions">Play</Link>
                            </ul>
                        </div> */



