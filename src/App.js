
import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


import ApplicantInfo from './components/User/ApplicantInfo';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Registration from './components/User/Registration';
import SearchApplicant from './components/User/SearchApplicant';
import ErrorHandling from './components/User/ErrorHandling';
import EditApplicant from './components/User/EditApplicant';
import RegisteredVerification from './components/User/registeredVerification';
import NavBar from './components/NavBar';


const App = () => {

  return (
  <>
  <Router>
      
      <div className='' style={{height:"100vh"}}>
      <NavBar />
        <Routes className="flex-grow-1">
          
          <Route index element={<Home />}></Route>
          <Route path='/registeredVerification' element={<RegisteredVerification />}/>
          <Route path="/Registration" element={<Registration />}></Route>
          <Route path="/SearchApplicant" element={<SearchApplicant />}></Route>
          <Route path="/ApplicantInfo" element={<ApplicantInfo />}></Route>
          <Route path="/EditApplicant" element={<EditApplicant />}></Route>
          <Route path="/ErrorHandling" element={<ErrorHandling />}></Route>
        </Routes>
        <Footer />
      </div>
      
      
  </Router>
  </>
)
};

export default App;
