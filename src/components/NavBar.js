import { Link } from "react-router-dom"

export default () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark mask-custom shadow-0 sticky-top" id="mainNav" style={{backgroundColor: '#4865CC'}}>
            <div className="container">
                <a className="navbar-brand" href="/"><span className="primary-color">MyVaccine</span></a>
                <button className="navbar-toggler text-uppercase font-weight-bold rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
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