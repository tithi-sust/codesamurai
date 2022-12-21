import logo from './logo.svg';
import './App.css';
import './components/Landing_page/Landing_page'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import LandingPage from './components/Landing_page/Landing_page';
import ClientSearchPage from  './components/ClinetSearhPage/ClientSearchPage'
import Login from './components/Login/Login'
import SignUp1 from './components/SignUp_1/SignUp_1';
import SignUpAsWorker from './components/SignUpAsWorker/SignUpAsWorker';
import UserProfile from './components/UserProfile/StudentProfile';
import ProposalRequestPage from './components/Proposal/ProposalRequestPage/ProposalRequestPage';

import { useState } from 'react';
import SignUpAsClient from './components/SignUpAsClient/SignUpAsClient';
import ClientSearchResult from './components/Client/ClientSearchResult/SearchResult';


function App() {
  const [user,setUser]=useState("f@gmail.com")
  const [searchedLocation,setSearchedLocation]=useState("PaikPara, B.Baria")
  return (
    
    <div className="App">
      <div id="body">
      <Router>
        <Routes>
          
        <Route path="/" exact element={<LandingPage/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/search" exact element={<ClientSearchPage/>}/>
        <Route path="/studentprofile" exact element={<UserProfile/>}/>
        <Route path="/signup1" exact element={<SignUp1/>}/>
        <Route path="/signup3" exact element={<SignUpAsClient/>}/>
        <Route path="/clientSearchResult" exact element={<ClientSearchResult/>}/>
        <Route path="/proposalRequest" exact element={<ProposalRequestPage/>}/>
        </Routes>
      </Router>
      </div>
    </div>

  );
}

export default App;
