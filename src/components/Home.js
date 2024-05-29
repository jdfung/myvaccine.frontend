import { Link } from "react-router-dom"
import stock from '../Assets/stockVaccination.jpg'
import immunity from '../Assets/Immunity.jpg'
import spread from '../Assets/spread.jpg'
import healthcare from '../Assets/health.jpg'

export default () => {
    return (
        <>
        <div className="content-container">
            <div className="main-content">

            {/* Hero Section */}
            <div className="text-center hero-img">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight normal">MyVaccine</h1>
                    <p className="lead font-weight-normal">Streamline your vaccination experience with our intuitive management system. Register for appointments effortlessly, manage schedules, and stay informed every step of the way. Your health, our priority.</p>
                    <Link to="/registeredVerification" className='btn btn-home text-light'>Register Now</Link>
                </div>
            </div>
            <div className="d-md-flex flex-md-equal flex-md-row flex-column container mt-5 mb-5">
                <div className="align-self-center">
                    <h1>We provide vaccine that have been <span style={{color: '#4865CC'}}>clinically tested</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className="flex-grow align-self-center">
                    <img src={stock} className="page-img" alt="..."></img>
                </div>
            </div>

            {/* Featurette */}
            <div className="container">
                <h2 className="text-center">Why do we have to <span style={{color: '#4865CC'}}>Vaccinate</span></h2>
                <hr className="featurette-divider"></hr>
                
            </div>
            
            <div className="container d-flex flex-md-row flex-column mt-3 mb-3">
                <div className="col-md-7 flex-fill align-self-center">
                    <h4 className="featurette-heading">Build Immunity against Covid-19</h4>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className="col-md-3">
                    <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={{width: "320px", height: "290px"}} src={immunity} data-holder-rendered="true" />
                </div>
                
            </div>
            <hr className="featurette-divider container"></hr>
            <div className="container d-flex flex-md-row flex-column-reverse  mt-3 mb-3">
                
                <div className="col-md-3">
                    <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={{width: "300px", height: "300px"}} src={spread} data-holder-rendered="true" />
                </div>
                <div className="col-md-7 flex-fill align-self-center">
                    <h4 className="featurette-heading">Prevent Spread</h4>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>
            <hr className="featurette-divider container"></hr>

            <div className="container d-flex flex-md-row flex-column mt-3 mb-3">
                <div className="col-md-7 flex-fill align-self-center">
                    <h4 className="featurette-heading">Support Healthcare</h4>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className="col-md-3">
                    <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={{width: "300px", height: "300px"}} src={healthcare} data-holder-rendered="true" />
                </div>
                
            </div>
            <hr className="featurette-divider container"></hr>

            {/* FAQ section */}

            <div className="container mb-5">
                <h2 className="text-center" style={{color: '#4865CC'}}>FAQ</h2>
                
                <div className="accordion" id="accordionSection">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading1">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                Which Vaccination is better against covid-19?
                            </button>
                        </h2>
                        <div className="accordion-collapse collapse" id="collapse1" aria-labelledby="heading1" data-bs-parent="#accordionSection">
                            <div className="accordion-body">
                                <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</strong>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                How many doses does it need?
                            </button>
                        </h2>
                        <div className="accordion-collapse collapse" id="collapse2" aria-labelledby="heading2" data-bs-parent="#accordionSection">
                            <div className="accordion-body">
                                <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</strong>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                Is it necessary for both doses to travel internationally?
                            </button>
                        </h2>
                        <div className="accordion-collapse collapse" id="collapse3" aria-labelledby="heading2" data-bs-parent="#accordionSection">
                            <div className="accordion-body">
                                <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</strong>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                Do I get to choose my preferred Covid-19 Vaccine?
                            </button>
                        </h2>
                        <div className="accordion-collapse collapse" id="collapse4" aria-labelledby="heading2" data-bs-parent="#accordionSection">
                            <div className="accordion-body">
                                <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}