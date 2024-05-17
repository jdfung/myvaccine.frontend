import { Card, FormControl } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faIdCard} from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSpeciApplicantByIc } from "../../Services/Applicant";

export default () => {

    const [userInput, setUserInput] = useState(null);
    const [existUser, setExistUser] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        
    }, [])

    const handleChange = (event) => {
        const value = event.target.value
        setUserInput(value)
        // console.log(userInput)
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const status = await GetSpeciApplicantByIc(dispatch, userInput);
        if(status == 200) {
            setExistUser(true);
        }
        else {
            setExistUser(false);
            navigate('/Registration');
        }
    }

    const HandleExistingUser = () => {

        return(
            <div className="container pt-5 pb-5 text-center">
                <Card className="p-3 bg-light d-flex justify-content-center align-items-center text-center">
                    <h3 className="m-3 text-center">The IC number you have entered has been registered</h3>
                    <p>Please redirect to the "View My Vaccine" page to check for the applicants information</p>
                    <button className="btn btn-danger p-2 w-25" onClick={() => navigate(-1)}>Back</button>
                </Card>
                
            </div>
        )
    }

    return !existUser 
    ?(
        <div className="container pt-5 pb-5 text-center">
            <Card className="bg-light d-flex justify-content-center text-center">
                <h1 className="m-3 text-center">MyVaccine Registration</h1>

                
                <Card className="border border-dark rounded mb-5 bg-white">
                    <div >
                        <h3 className="m-3 text-center">Enter Your IC Number</h3>
                    </div>
                    <div className="m-3">
                        <form className="m-3" onSubmit={handleSubmit}>
                            <div className="input-group pb-3">
                                <span className="input-group-text" id="basic-addon2"><FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon></span>
                                <FormControl type="text" className="form-control" maxLength={12} name="IC" placeholder="IC" aria-label="IC" aria-describedby="basic-addon2" onChange={handleChange} required></FormControl>
                            </div>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <button className="btn btn-primary p-2 w-25" type="submit">Next</button>
                                <Link className="btn btn-danger p-2 w-25" to="/Home">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </Card>
            </Card>
        </div>
    )
    : <HandleExistingUser />

}