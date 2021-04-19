import React, { Component } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import setCenter from '@iconify-icons/mdi/set-center';
import lightbulbOnOutline from '@iconify-icons/mdi/lightbulb-on-outline';
import clockOutline from '@iconify-icons/mdi/clock-outline';
import {Link} from "react-router-dom";

import logo from '../../assets/images/discLogo.png';


export default class PersonalityTest extends Component {
    render() {
        return (
            <>
            <div className="questionsTest" style={{color:'black'}}>
                <div align='center'>
                <br/>
                <img src={logo} className="logoTest" alt="logo" />  
                </div>
                <br/>
               <h2 style={{fontWeight:'bold'}}>DISC Test </h2>
                <div>
                    <p>
                        <span className="left">1 of 80</span>
                        <span className="right">2:15<span><Icon className="lifeline"  icon={clockOutline} /></span></span>
                    </p>
                </div>
             <h5>In which array of <stron>AppModule</stron> should you declare your services in order for there to be a single instance for your entire application? </h5>
               <div className="options-container">
                <p className="optionsRed">declarations</p> 
                <p className="optionsGreen">imports</p>    
                </div> 
                <div className="options-container">
                <p className="options">providers</p> 
                <p className="optionsYellow">no response</p>    
                </div> 
                <div className="button-container">
                    <button><Link style={{color:'white'}} to="/personalityTest/instructions">Previous</Link></button>
                    <button><Link style={{color:'white'}} to="/personalityTest/testResult"> Next </Link></button>
                   
                    <button><Link style={{color:'white'}} to="/Elearning"> Quit </Link></button>

                </div> 
            </div>
            </>
        )
    }
}
