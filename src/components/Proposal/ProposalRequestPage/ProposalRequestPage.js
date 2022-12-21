import React, { useState } from "react";
import Footer from "../../common/footer/Footer";
import TitleBar from "../../common/Title_bar";
import "./style.css"

 const ProposalRequestPage=()=>{
    const [clients, setClients]=useState([
        {name:"proj9280", service:"Shopping", service_status:"Running", profile_pic:"./pics_icons/profilepic.jpg", email:"tithi@gmailcom"},
        {name:"proj9681", service:"Shopping", service_status:"Waiting", profile_pic:"./pics_icons/profilepic.jpg", email:"tithi@gmailcom"},
        {name:"proj3281", service:"Painting", service_status:"Cancelled", profile_pic:"./pics_icons/profilepic.jpg", email:"tithi@gmailcom"}
        ]);

    let accept=(client)=>{
        alert("Accept work for "+client.name)
    }
    let decline=(client)=>{
        alert("Decline work for "+client.name)
    }

    const removeAfterAcceptOrDecline=(name)=>{
        setClients(clients.filter(client=>client.name!==name))
    }
    

    let viewProfile=(e,client)=>{
        let isClickInsideAcceptButton = false;
        let isClickInsideDeclineButton = false;
        const AcceptButtons = document.querySelectorAll(".acceptbutton");
        const DeclineButtons = document.querySelectorAll(".declinebutton");
      
        AcceptButtons.forEach(acceptbutton => acceptbutton.contains(e.target) ? isClickInsideAcceptButton = true:null)
        DeclineButtons.forEach(declinebutton => declinebutton.contains(e.target) ? isClickInsideDeclineButton = true:null)
        if(isClickInsideAcceptButton || isClickInsideDeclineButton)
            return;
        alert("View profile of "+client.name)
    }

    return(
        <div>
            <TitleBar page="clientPage"/>
            <div id="request">
                <div id="requestpagetxt">Proposal Requests</div>
                {clients.map(client=>
                    <div className="rectangle" onClick={(e)=>{viewProfile(e,client)}}>
                        
                        <div class="rectxt">{client.name} 
                
                        </div>
                        <button class="acceptbutton" onClick={()=>{accept(client); removeAfterAcceptOrDecline(client.name)}}>Accept</button>
                        <button class="declinebutton" onClick={()=>{decline(client); removeAfterAcceptOrDecline(client.name)}}>Decline</button>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    )
 }
 export default ProposalRequestPage;

 
