import { Card, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faIdCard, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faEnvelope, faVenusMars, faAddressBook, faCity, faHospital, faMapLocation, faSyringe } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { AddApplicants } from "../../Services/Applicant";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AddAppointment } from "../../Services/Appointment";
import { useNavigate } from "react-router-dom";
import { GetAllRecords, GetAllStates } from "../../Services/VaccCentre";



const Registration = () => {
    const { state } = useLocation();
    const States = useSelector(state => state.VaccCentreReducer.VaccCentres);
    const [currStates, setCurrStates] = useState({ Data: States });
    const [allStates, setAllStates] = useState({ Data: [] });
    const [District, setDistrict] = useState({ Data: [] });
    const [VaccCenter, setVaccCentre] = useState({ Data: [] });
    const [isFetching, setIsFetching] = useState(true)
    const VaccChoice = ["Phizer", "Astrazeneca", "Sinovac", "Moderna"];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formInput, setFormInput] = useState({
        Name: "",
        IC: state.ic,
        Gender: "",
        PhoneNo: "",
        Email: "",
        Address: "",
        State: "",
        District: "",
        Centre: "",
        VaccChoice: "",
        firstDoseDate: ""
    })

    useEffect(() => {
        setTimeout(() => GetAllRecords(dispatch), 600); //call Api and get data
    }, [])

    useEffect(() => {
        setCurrStates({ Data: States }); //set received data into state
        setAllStates({ Data: [...new Set(currStates.Data.map(state => (state.state)))] }) //remove duplicates and insert into state
        // setFormInput((prev) => ({
        //     ...prev,
        //     IC: state.ic
        // }))
    }, [States])


    useEffect(() => {

        setAllStates({ Data: [...new Set(currStates.Data.map(state => (state.state)))] }) //remove duplicates and insert into state
        setIsFetching(false); //At this point all data needed is fetched
    }, [currStates.Data])

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setFormInput((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });

        console.log(state)

        //conditional select dropdowns
        switch (name) {
            case 'State':
                {
                    const dist = currStates.Data.filter((data) => {
                        return data.state == value
                    })

                    setDistrict({
                        Data: [...new Set(dist.map(x => (x.distrct)))]
                    })

                    break;
                }
            case 'District':
                {
                    const vaccCentre = currStates.Data.filter((data) => {
                        return (data.distrct == value)
                    })

                    setVaccCentre({
                        Data: vaccCentre.map(x => (x.centreName))
                    })
                    break;
                }
            default:
                break;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await AddApplicants(dispatch, { name: formInput.Name, ic: formInput.IC, gender: formInput.Gender, phoneNo: formInput.PhoneNo, email: formInput.Email, address: formInput.Address, firstDose: false, secondDose: false })
        await AddAppointment(dispatch, { name: formInput.Name, ic: formInput.IC, vaccCenter: formInput.Centre, vaccChoice: formInput.VaccChoice, firstDoseDate: formInput.firstDoseDate, secondDoseDate: null })

        navigate('/ApplicantInfo', {
            state: {
                Name: formInput.Name,
                Ic: formInput.IC
            }
        })
    }



    return isFetching
        ? (<div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>)
        : (<div className="container pt-5 pb-5 text-center">

            <Card className="bg-light">
                <h1 className="m-3 text-center">Vaccination Registration Form</h1>

                <form className="m-3" onSubmit={handleSubmit}>
                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span>
                        <FormControl type="text" className="form-control" name="Name" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange} required></FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon2"><FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon></span>
                        <FormControl type="text" style={{ cursor: 'not-allowed' }} readOnly className="form-control bg-secondary text-light" value={state.ic} name="IC" placeholder="IC" aria-label="IC" aria-describedby="basic-addon2" onChange={handleChange} required></FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon3"><FontAwesomeIcon icon={faVenusMars}></FontAwesomeIcon></span>
                        <FormControl as='select' name="Gender" onChange={handleChange} placeholder="Select Gender" required>
                            <option key='blankChoice' hidden value>----- Select Gender -----</option>
                            <option>Male</option>
                            <option>Female</option>
                        </FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon4"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></span>
                        <FormControl type="tel" className="form-control" placeholder="Phone Number" name="PhoneNo" onChange={handleChange} required></FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon5"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span>
                        <FormControl type="email" className="form-control" placeholder="Email" name="Email" onChange={handleChange} required></FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon5"><FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon></span>
                        <FormControl as="textarea" placeholder="Address" name="Address" onChange={handleChange} required></FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon3"><FontAwesomeIcon icon={faMapLocation}></FontAwesomeIcon></span>
                        <FormControl as='select' name="State" onChange={handleChange} required>
                            <option key='blankChoice' hidden value>----- Select State -----</option>
                            {

                                allStates.Data.map(state => {
                                    return (
                                        <option>{state}</option>
                                    )
                                })
                            }
                        </FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon3"><FontAwesomeIcon icon={faCity}></FontAwesomeIcon></span>
                        <FormControl as='select' name="District" onChange={handleChange} required>
                            <option key='blankChoice' hidden value>----- Select District -----</option>
                            {District.Data.map(dist => (
                                <option>{dist}</option>
                            ))}
                        </FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon3"><FontAwesomeIcon icon={faHospital}></FontAwesomeIcon></span>
                        <FormControl as='select' name="Centre" onChange={handleChange} required>
                            <option key='blankChoice' hidden value>----- Select Centre -----</option>
                            {VaccCenter.Data.map(center => (
                                <option>{center}</option>
                            ))}
                        </FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon3"><FontAwesomeIcon icon={faSyringe}></FontAwesomeIcon></span>
                        <FormControl as='select' name="VaccChoice" onChange={handleChange} required>
                            <option key='blankChoice' hidden value>----- Select Vaccination Choice -----</option>
                            {VaccChoice.map(choice => (
                                <option>{choice}</option>
                            ))}
                        </FormControl>
                    </div>

                    <div className="input-group pb-3">
                        <span className="input-group-text" id="basic-addon3"><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon></span>
                        <FormControl class="form-control" type="date" name="firstDoseDate" onChange={handleChange} required />
                    </div>

                    <div className="form-group text-center pb-3">
                        <button type="submit" className="btn btn-primary btn-block mx-3" >Submit</button>
                        <Link to="/" className='btn btn-danger btn-block mx-3'>Cancel</Link>
                    </div>
                </form>
            </Card>
        </div>
        )
}


export default Registration;