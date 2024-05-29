import { Link } from "react-router-dom"

export default () => {

    return (

        <nav class="navbar navbar-expand-lg navbar-dark mask-custom shadow-0" id="mainNav" style={{backgroundColor: '#4865CC'}}>
            <div class="container">
                <a class="navbar-brand" href="#page-top"><span className="primary-color">MyVaccine</span></a>
                <button class="navbar-toggler text-uppercase font-weight-bold rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-white"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                    <li className='nav-item'>
                        <Link to="/" className='nav-link'>Home</Link>
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
    )
}