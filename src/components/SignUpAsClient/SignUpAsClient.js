import React from "react";
import Footer from "../common/footer/Footer";
import TitleBar from "../common/Title_bar";
import { Link } from "react-router-dom";

import 'react-dropdown/style.css';
import "./style.css"
import { useState } from "react";
 const SignUpAsClient=()=>{
    const role = ["System admin", "Executive Committee of the National Economic Council",
     "Ministry of Planning", "Executing Agency", "Application Users"]
    
    return(
        <div id="container">
            <TitleBar page="signUp"/>
            <div id="signUp">
                <div id="signuptxt">Sign Up</div>
                <input type="name" class="signupinput" id="name" placeholder="Username"/>
                
                {/* <input class="signupinput" id="role" placeholder="Select Role"/> */}
                
                <input class="signupinput" id="email" placeholder="Email"/>
                <input type="password" class="signupinput" id="password" placeholder="password"/>
                
              
    
                <div id="signupbuttton"><Link to="/studentprofile">Sign Up</Link></div>
                        
                <div id="alreadyhaveaccount">Already have an account?<Link to="/login"><font id="logIn">Log In</font></Link></div>
                </div>
            
        </div>
    )
 }
 export default SignUpAsClient;
 /*
 <input class="signupinput" id="ID" placeholder="ID number"/>
   <select type="name" class="roles" id="roles" placeholder="Select Role">
                <option value="none" selected disabled hidden>Select Option for Role</option>
        <option value="System admin">System admin</option>
        <option value="Executive Committee of the National Economic Council">Executive Committee of the National Economic Council </option>
        <option value="Ministry of Planning">Ministry of Planning</option>
        <option value="Executing Agency">Executing Agency</option>
        <option value="Application Users">Application Users</option>
        
    </select>
 */ 