import React, { useEffect, useState } from "react";
import '../common/Title_bar';
import TitleBar from "../common/Title_bar";
import Footer from "../common/footer/Footer";
import './style.css';
import axios from "axios";


const LandingPage=()=>{
    const [counts,setCounts]=useState({})
    useEffect(()=>{
        axios.get("http://localhost:3001/landingpagecount").then(res=>{
            setCounts(res.data)
        })
    },[])
    return(
        <div>
            <TitleBar page="landing" style={{"border-bottom":"0px solid white"}}/>
            <img src="./pics_icons/landing.png" id="landing_img"></img>
            <div id="Manush_lagbe"><b>Public Project Management</b></div>
            <div id="we_are_here">We are here for you</div>
           
            <div id="whymms">
                    <div id="whymmstitle"><b>Why PPM?</b></div>
                    <div id="whymmstxt">
                    PPM has been developed to provide residents with transparent and accessible information about upcoming and ongoing
public projects, this system has the potential to improve communication between government agencies
and citizens. 
                    </div>
            </div>
            
        </div>
    )
}
export default LandingPage;