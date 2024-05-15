import { Card, FormControl } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faIdCard, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faEnvelope, faVenusMars, faAddressBook, faCity, faHospital, faMapLocation, faSyringe } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetSpeciApplicantByID } from "../../Services/Applicant";
import { useDispatch, useSelector } from "react-redux";

export default () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { state } = useLocation();
    const EditApplicant = useSelector(state => state.ApplicantsReducer.Applicants);
    const [currEditApplicant, setCurrEditApplicant] = useState({Data: [], isFetching: true});

    useEffect(() => {
        GetSpeciApplicantByID(dispatch, state.applicant_id);
    }, [])

    useEffect(() => {
        setCurrEditApplicant({Data: EditApplicant, isFetching: false})
    }, [EditApplicant])

    
    const handleChange = () => {
        return;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(currEditApplicant);
    }

    return !currEditApplicant.isFetching
    ? (
        <div className="container pt-5 pb-5 text-center">
            <Card className="bg-light">
                <h1 className="m-3 text-center">Edit Applicant Information</h1>
                <form className="m-3">
                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span>
                        <FormControl type="text" defaultValue={currEditApplicant.Data[0].name} className="form-control" name="Name" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange}></FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon2"><FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon></span>
                        <FormControl type="text" defaultValue={currEditApplicant.Data[0].ic} className="form-control" name="IC" placeholder="IC" aria-label="IC" aria-describedby="basic-addon2" onChange={handleChange}></FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon3"><FontAwesomeIcon icon={faVenusMars}></FontAwesomeIcon></span>
                        <FormControl as='select' name="Gender" onChange={handleChange}>
                            <option selected>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon4"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></span>
                        <FormControl type="tel" defaultValue={currEditApplicant.Data[0].phoneNo} className="form-control" placeholder="Phone Number" name="PhoneNo" onChange={handleChange}></FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon5"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span>
                        <FormControl type="email" defaultValue={currEditApplicant.Data[0].email} className="form-control" placeholder="Email" name="Email" onChange={handleChange}></FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon5"><FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon></span>
                        <FormControl as="textarea" defaultValue={currEditApplicant.Data[0].address} placeholder="Address" name="Address" onChange={handleChange}></FormControl>
                    </div>

                    <div className="form-group text-center pb-3">
                        <button type="submit" className="btn btn-primary btn-block mx-3" onClick={handleSubmit}>Submit</button>
                        <button type="button" onClick={() => navigate(-1)} className='btn btn-danger btn-block mx-3'>Back</button>
                    </div>

                </form>
            </Card>
        </div>
    )
    : (<div><h1>Loading</h1></div>)
}