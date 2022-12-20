import React from "react";
import Footer from "../common/footer/Footer";
import TitleBar from "../common/Title_bar";
import { Link } from "react-router-dom";
import App from "./user_type_checkbox/App";
import "./style.css"
 const SignUp1=()=>{
    return(
        <div id="container">
            <TitleBar page="signup"/>
            <div id="signup">
            
                <div id="signuptxt">Select Role</div>
                <div><App/></div>
                <br/>
                <div id="signupbuttton"><Link to="/signup3">Sign Up</Link></div>
                <br/><br/><br/>
                <div id="alreadyhaveaccount">Already have an account?<Link to="/login"><font id="logIn">Log In</font></Link></div>
            </div>
            <Footer/>
        </div>
    )
 }
 export default SignUp1;
