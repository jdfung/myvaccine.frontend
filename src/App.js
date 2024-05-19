import React from 'react';
import './App.css';
import ApplicantInfo from './components/User/ApplicantInfo';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Home from './components/Home';
import Footer from './components/Footer';
import Registration from './components/User/Registration';
import SearchApplicant from './components/User/SearchApplicant';
import ErrorHandling from './components/User/ErrorHandling';
import EditApplicant from './components/User/EditApplicant';
import RegisteredVerification from './components/User/registeredVerification';


const App = () => (
  <>
  <Router>
    <header>
      <nav className='navbar navbar-expand-lg navbar-white fixed-top mask-custom shadow-0' style={{backgroundColor: '#27b2b3'}}>
        <div className='container'>
          <a className='navbar-brand' href='#!'><span style={{color: '#4c3c3c'}}>My</span><span style={{color: '#fff'}}>Vaccine</span></a>
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <Link to="/Home" className='nav-link'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to="/registeredVerification" className='nav-link'>Registration</Link>
              </li>
              <li className='nav-item'>
                <Link to="/SearchApplicant" className='nav-link'>View My Vaccine</Link>
              </li>
            </ul>
          </div>
        </div>

      </nav>

      <section>

        
      <div className="mask" style={{backgroundColor: "rgba(250, 182, 162, 0.15)"}}></div>


      </section>
      </header>
      
      <div className='mt-5 d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path='/registeredVerification' element={<RegisteredVerification />}/>
          <Route path="/Registration" element={<Registration />}></Route>
          <Route path="/SearchApplicant" element={<SearchApplicant />}></Route>
          <Route path="/ApplicantInfo" element={<ApplicantInfo />}></Route>
          <Route path="/EditApplicant" element={<EditApplicant />}></Route>
          <Route path="/ErrorHandling" element={<ErrorHandling />}></Route>
        </Routes>
      </div>
      
      
  </Router>
  <Footer />
  </>
);

export default App;
