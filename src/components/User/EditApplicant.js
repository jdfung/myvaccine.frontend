import { Card, FormControl } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faIdCard, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faEnvelope, faVenusMars, faAddressBook, faCity, faHospital, faMapLocation, faSyringe } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetSpeciApplicantByID, UpdateApplicant } from "../../Services/Applicant";
import { useDispatch, useSelector } from "react-redux";
import { UpdateAppointmentName } from "../../Services/Appointment";

export default () => {

    var navigate = useNavigate();
    var dispatch = useDispatch();
    var { state } = useLocation();
    var EditApplicant = useSelector(state => state.ApplicantsReducer.Applicants);
    var [currEditApplicant, setCurrEditApplicant] = useState({Data: null, isFetching: true});

    useEffect(() => {
        GetSpeciApplicantByID(dispatch, state.applicant_id);
    }, [])

    useEffect(() => {
        setCurrEditApplicant({Data: EditApplicant, isFetching: false})
    }, [EditApplicant])

    
    var handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const newValue = [...currEditApplicant.Data];
        const val = {
            ...newValue[0],
            [name]: value
        };
        newValue[0] = val;
        
        setCurrEditApplicant((prev) => ({
            ...prev,
            Data: [
                newValue[0]
            ]
        }))
        console.log(currEditApplicant)
    }

    var handleSubmit = async (event) => {
        event.preventDefault();
        await UpdateApplicant(dispatch, currEditApplicant.Data[0]);
        await UpdateAppointmentName(dispatch, state.appointment_id, currEditApplicant.Data[0].name)

        navigate('/ApplicantInfo', {
            state: {
                Name: currEditApplicant.Data[0].name,
                Ic: currEditApplicant.Data[0].ic
            }
        })
    }

    return !currEditApplicant.isFetching
    ? (
        <div className="container pt-5 pb-5 text-center">
            <Card className="bg-light">
                <h1 className="m-3 text-center">Edit Applicant Information</h1>
                <form className="m-3">
                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span>
                        <FormControl type="text" defaultValue={currEditApplicant.Data[0].name} className="form-control" name="name" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange}></FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon2"><FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon></span>
                        <FormControl type="text" value={currEditApplicant.Data[0].ic} style={{ cursor: 'not-allowed' }} readOnly className="form-control bg-secondary text-light" name="ic" placeholder="IC" aria-label="IC" aria-describedby="basic-addon2" onChange={handleChange}></FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon3"><FontAwesomeIcon icon={faVenusMars}></FontAwesomeIcon></span>
                        <FormControl as='select' name="gender" onChange={handleChange}>
                            <option selected>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon4"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></span>
                        <FormControl type="tel" defaultValue={currEditApplicant.Data[0].phoneNo} className="form-control" placeholder="Phone Number" name="phoneNo" onChange={handleChange}></FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon5"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span>
                        <FormControl type="email" defaultValue={currEditApplicant.Data[0].email} className="form-control" placeholder="Email" name="email" onChange={handleChange}></FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon5"><FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon></span>
                        <FormControl as="textarea" defaultValue={currEditApplicant.Data[0].address} placeholder="Address" name="address" onChange={handleChange}></FormControl>
                    </div>

                    <div className="form-group text-center pb-3">
                        <button type="submit" className="btn btn-primary btn-block mx-3" onClick={handleSubmit}>Confirm</button>
                        <button type="button" onClick={() => navigate(-1)} className='btn btn-danger btn-block mx-3'>Back</button>
                    </div>

                </form>
            </Card>
        </div>
    )
    : (<div><h1>Loading</h1></div>)
}