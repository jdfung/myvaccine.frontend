import { Card, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faIdCard, faCalendar} from "@fortawesome/free-regular-svg-icons";
import { faPhone, faEnvelope, faVenusMars, faAddressBook, faCity, faHospital, faMapLocation, faSyringe} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AddApplicants } from "../../Services/Applicant";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AddAppointment } from "../../Services/Appointment";
import { useNavigate } from "react-router-dom";
import { GetSpeciApplicant } from "../../Services/Applicant";
import { GetAllStates } from "../../Services/VaccCentre";



const Registration = () => {

    // const [States, setStates] = useState({Data: useSelector(state => state.VaccCentreReducer.VaccCentres), isFetching: true});
    const States = useSelector(state => state.VaccCentreReducer.VaccCentres);
    const District = ["Puchong", "Ampang", "Bayan Lepas"];
    const VaccCenter = ["Gombak Medical Centre", "KL Hospital", "Batu kawan Hospital"];
    const VaccChoice = ["Phizer", "Astrazeneca", "Sinovac", "Moderna"];
    const [dataRegistered, setDataRegistered] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formInput, setFormInput] = useState({
        Name: "",
        IC: "",
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
        GetAllStates(dispatch);
    }, [])

    useEffect(() => {
        console.log(States);
    }, [States])

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setFormInput((prev)  => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    return (
    <div className="container pt-5 pb-5 text-center">
        <Card className="bg-light">
            <h1 className="m-3 text-center">Vaccination Registration Form</h1>

            <form className="m-3" onSubmit={(event) => {
                event.preventDefault();
                AddApplicants(dispatch, {name: formInput.Name, ic: formInput.IC, gender: formInput.Gender, phoneNo: formInput.PhoneNo, email: formInput.Email, address: formInput.Address, firstDose: true, secondDose: false})
                AddAppointment(dispatch, {ic: formInput.IC, name: formInput.Name, vaccCenter: formInput.Centre, vaccChoice: formInput.VaccChoice, firstDoseDate: formInput.firstDoseDate, secondDoseDate: formInput.firstDoseDate});

                navigate('/ApplicantInfo', {
                    state: {
                        Name: formInput.Name,
                        Ic: formInput.IC
                    }
                })
            }}>
                <div className="input-group pb-3">
                    <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span>
                    <FormControl type="text" className="form-control" name="Name" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange}></FormControl>
                </div>

                <div className="input-group pb-3">
                    <span className="input-group-text" id="basic-addon2"><FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon></span>
                    <FormControl type="text" className="form-control" name="IC" placeholder="IC" aria-label="IC" aria-describedby="basic-addon2" onChange={handleChange}></FormControl>
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
                    <FormControl type="tel" className="form-control" placeholder="Phone Number" name="PhoneNo" onChange={handleChange}></FormControl>
                </div>

                <div className="input-group pb-3">
                    <span className="input-group-text" id="basic-addon5"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span>
                    <FormControl type="email" className="form-control" placeholder="Email" name="Email" onChange={handleChange}></FormControl>
                </div>

                <div className="input-group pb-3">
                    <span className="input-group-text" id="basic-addon5"><FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon></span>
                    <FormControl as="textarea" placeholder="Address" name="Address" onChange={handleChange}></FormControl>
                </div>

                <div className="input-group pb-3">
                    <span className="input-group-text" id="basic-addon3"><FontAwesomeIcon icon={faMapLocation}></FontAwesomeIcon></span>
                    <FormControl as='select' name="State" onChange={handleChange}>
                        <option selected>Select State</option>
                        {States.map(state => (
                            <option>{state.state}</option>
                        ))}
                    </FormControl>
                </div>

                <div className="input-group pb-3">
                    <span className="input-group-text" id="basic-addon3"><FontAwesomeIcon icon={faCity}></FontAwesomeIcon></span>
                    <FormControl as='select' name="District" onChange={handleChange}>
                        <option selected>Select District</option>
                        {District.map(dist => (
                            <option>{dist}</option>
                        ))}
                    </FormControl>
                </div>

                <div className="input-group pb-3">
                    <span className="input-group-text" id="basic-addon3"><FontAwesomeIcon icon={faHospital}></FontAwesomeIcon></span>
                    <FormControl as='select' name="Centre" onChange={handleChange}>
                        <option selected>Select Centre</option>
                        {VaccCenter.map(center => (
                            <option>{center}</option>
                        ))}
                    </FormControl>
                </div>

                <div className="input-group pb-3">
                    <span className="input-group-text" id="basic-addon3"><FontAwesomeIcon icon={faSyringe}></FontAwesomeIcon></span>
                    <FormControl as='select' name="VaccChoice" onChange={handleChange}>
                        <option selected>Select Vaccination Choice</option>
                        {VaccChoice.map(choice => (
                            <option>{choice}</option>
                        ))}
                    </FormControl>
                </div>

                <div className="input-group pb-3">
                    <span className="input-group-text" id="basic-addon3"><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon></span>
                    <FormControl class="form-control" type="date" name="firstDoseDate" onChange={handleChange}/>
                </div>

                <div className="form-group text-center pb-3">
                    <button type="submit" className="btn btn-primary btn-block mx-3" >Submit</button>
                    <Link to="/Home" className='btn btn-danger btn-block mx-3'>Cancel</Link>
                </div>
            </form>
        </Card>
    </div>
)

}


export default Registration;