import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSpeciApplicant } from "../../Services/Applicant";
import { Button, Card, Col, Row } from "react-bootstrap";
import { DeleteAppointmentDate, GetSpeciAppointment } from "../../Services/Appointment";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

export default () => {
    const dispatch = useDispatch();
    const { state } = useLocation();
    const Appointments = useSelector(state => state.AppointmentReducer.Appointments);
    const [currAppointments, setCurrAppointments] = useState({Data:Appointments, isFetching: true})
    const Applicants = useSelector(state => state.ApplicantsReducer.Applicants);
    var [currApplicants, setCurrApplicants] = useState({Data: Applicants, isFetching: true})
    const [isSuccess, setIsSuccess] = useState({Applicant: false, Appointment: false});
    const navigate = useNavigate();
    

    useEffect(() => {
        GetSpeciApplicant(dispatch, state.Name, state.Ic)
        GetSpeciAppointment(dispatch, state.Name, state.Ic)    
    }, [])

    useEffect(() => {
        
        setTimeout(() => setCurrAppointments({Data: Appointments, isFetching: false}), 1000);
        setTimeout(() => setCurrApplicants({Data: Applicants, isFetching: false}), 1000);
        
    }, [Applicants, Appointments])

    const handleEdit = () => {
        navigate("/EditApplicant", {
            state: {
                applicant_id: currApplicants.Data[0].applicant_id,
                appointment_id: currAppointments.Data.appointment_id
            }
        })
    }

    const FormHeader = () => {
        return (
            <div className="p-3 text-center">
                <h1>Applicant Vaccination Information</h1>
            </div>
        )
    }
    
    const FormButtons = () => {
        return (
            <div className="d-flex justify-content-center align-items-center flex-column pb-3">
                <Button className="btn btn-primary p-2 w-25" onClick={handleEdit}>Edit</Button>
                <Link className="btn btn-danger p-2 w-25" to="/SearchApplicant">Back</Link>
            </div>
        )
    }
    

    return currApplicants.isFetching || currAppointments.isFetching
       ? (<div className="d-flex flex-column align-items-center h-100 mt-5">
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </div>)
       : (currApplicants.Data.map((x,i) => 
        <div key={x.id} className="container pt-5 pb-5">
            <Card className="bg-light d-flex justify-content-center">
                <FormHeader />
                <ApplicantInfos applis={x} appoints={currAppointments.Data}/>
                <AppointmentInfos applis={currApplicants.Data[0]} appoints={currAppointments.Data}/>
                <FormButtons />
            </Card>
        </div>))

}

const ApplicantInfos = ({applis, appoints}) => {

    const labels = ["IC number", "Name", "Gender", "Phone Number", "Email", "Address", "Vaccination Centre", "Vaccination Choice"];
    const data = [applis.ic, applis.name, applis.gender, applis.phoneNo, applis.email, applis.address, appoints.vaccCenter, appoints.vaccChoice];

    return (
        <div key={applis.ic} className="px-5 justify-content-center align-items-center">
            {labels.map((x, i) => (
                <Row className="pb-3">
                    <Col className="text-center">{x}:</Col>
                    <Col className="text-center">{data[i]}</Col>
                </Row>
            ))}
        </div>
    )
}

const AppointmentInfos = ({applis, appoints}) => {
    const lables = ["Dose", "Appointment Date", "Vaccination Status", "Cancellation"];
    const navigate = useNavigate();
    const handleSubmit = async (event, doseNumber) => {
        event.preventDefault();
        const status = await DeleteAppointmentDate(appoints.appointment_id, doseNumber);
        
        if(status.status == 200)
            {
                navigate(0);
            }
    }

    return(
        <div className="pb-5">
            <Card className="bg-secondary text-light text-center">
                <Row className="m-2">
                    {lables.map(label => (
                        <Col>
                            {label}
                        </Col>
                    ))}
                </Row>

                <form onSubmit={(event) => handleSubmit(event, 1)}>
                    <Row className="m-2 justify-content-center align-items-center">
                        <Col>1</Col>
                        <Col>{appoints.firstDoseDate == null ? " - " : appoints.firstDoseDate}</Col>
                        <Col>
                            <div>
                            {applis.firstDose ? <Form.Check checked/> : <Form.Check disabled="disabled"/>}
                            </div>
                        </Col>
                        <Col>
                            <button className="btn btn-outline-danger">Cancel</button>
                        </Col>
                    </Row>
                </form>

                <form onSubmit={event => handleSubmit(event, 2)}>
                    <Row className="m-2 justify-content-center align-items-center">
                        <Col>2</Col>
                        <Col>{appoints.secondDoseDate == null ? " - " : appoints.secondDoseDate}</Col>
                        <Col>
                            <div>
                            {applis.secondDose ? <Form.Check checked/> : <Form.Check disabled="disabled"/>}
                            </div>
                        </Col>
                        <Col>
                            <button className="btn btn-outline-danger" type="submit">Cancel</button>
                        </Col>
                    </Row>
                </form>
            </Card>
        </div>
    )
}