import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSpeciApplicant } from "../../Services/Applicant";
import { Button, Col, Row } from "react-bootstrap";
import { GetSpeciAppointment } from "../../Services/Appointment";
import { useLocation, useNavigate } from "react-router-dom";

export default () => {
    const dispatch = useDispatch();
    const { state } = useLocation();
    const Appointments = useSelector(state => state.AppointmentReducer.Appointments);
    const Applicants = useSelector(state => state.ApplicantsReducer.Applicants);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    

    useEffect(() => {
        GetSpeciApplicant(dispatch, state.Name, state.Ic)
        GetSpeciAppointment(dispatch, state.Name, state.Ic);
    }, [])

    useEffect(() => {
        if(Applicants.length !== 0 && Appointments.length !== 0 )
            {
                setIsLoading(false);
            }
        if(!isLoading && Applicants == 500)
            {
                setIsLoading(true);
                navigate('/ErrorHandling', {
                    state: {
                        Error: 500
                    }
                })
            }
    }, [Applicants, Appointments])

    console.log(Applicants);

    
    return isLoading
       ? (<div></div>)
       : (Applicants.map((x,i) => 
        <div key={x.id} className="container">
            <FormHeader />
            <ApplicantInfos applis={x} appoints={Appointments[0]}/>
            <FormButtons />
        </div>))

}

const FormHeader = () => {
    return (
        <div className="p-3 text-center">
            <h2>Applicant Vaccination Information</h2>
        </div>
    )
}

const FormButtons = () => {
    return (
        <div className="p-3 d-grid">
            <Button className="btn btn-primary">Edit</Button>
            <Button className="btn btn-danger">Back</Button>
        </div>
    )
}

const ApplicantInfos = ({applis, appoints}) => {

    const labels = ["IC number", "Name", "Gender", "Phone Number", "Email", "Address", "Vaccination Centre", "Vaccination Choice"];
    const data = [applis.ic, applis.name, applis.gender, applis.phoneNo, applis.email, applis.address, appoints.vaccCenter, appoints.vaccChoice];

    return (
        <div className="px-5">
            {labels.map((x, i) => (
                <Row className="pb-3">
                    <Col>{x}:</Col>
                    <Col>{data[i]}</Col>
                </Row>
            ))}
        </div>
    )
}