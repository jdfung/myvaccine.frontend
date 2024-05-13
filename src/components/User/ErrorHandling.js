import { Link, useLocation } from "react-router-dom"



export default () => {
    const { state } = useLocation()

    switch(state.Error) {
        case 500:
            return(
            <div className="container text-center p-3">
                <h1>This Applicant does not exists</h1>
                <p>The Name or the IC number may be incorrect</p>
                <Link className="btn btn-danger" to="/SearchApplicant">Back</Link>
            </div>
            
        )
        default:
            return(
                <h1>Something has went wrong</h1>
            )
            
    }
}