import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSpeciApplicant } from "../../Services/Applicant";
import { Button, Col, Row } from "react-bootstrap";
import { GetSpeciAppointment } from "../../Services/Appointment";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default () => {
    const dispatch = useDispatch();
    const { state } = useLocation();
    const Appointments = useSelector(state => state.AppointmentReducer.Appointments);
    const [currAppointments, setCurrAppointments] = useState({Data:Appointments, isFetching: true})
    const Applicants = useSelector(state => state.ApplicantsReducer.Applicants);
    const [currApplicants, setCurrApplicants] = useState({Data: Applicants, isFetching: true})
    const [isSuccess, setIsSuccess] = useState({Applicant: false, Appointment: false});
    const navigate = useNavigate();
    

    useEffect(() => {
        GetSpeciApplicant(dispatch, state.Name, state.Ic)
        GetSpeciAppointment(dispatch, state.Name, state.Ic);
        
    }, [])

    useEffect(() => {
        
        setCurrAppointments({Data: Appointments, isFetching: false});
        setCurrApplicants({Data: Applicants, isFetching: false});
        
        if(!currApplicants.isFetching && !currAppointments.isFetching && Applicants == 500)
            {
                setCurrApplicants((prev) => ({
                    ...prev,
                    isFetching: true
                }))
                setCurrAppointments((prev) => ({
                    ...prev,
                    isFetching: true
                }))
                navigate('/ErrorHandling', {
                    state: {
                        Error: 500
                    }
                })
            }
    }, [Applicants, Appointments])

    const handleEdit = () => {
        navigate("/EditApplicant", {
            state: {
                applicant_id: currApplicants.Data[0].applicant_id
            }
        })
        // console.log(currApplicants.Data[0].applicant_id)
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
                <Button className="btn btn-primary" onClick={handleEdit}>Edit</Button>
                <Link className="btn btn-danger" to="/SearchApplicant">Back</Link>
            </div>
        )
    }
    

    
    return currApplicants.isFetching && currAppointments.isFetching
       ? (<div></div>)
       : (currApplicants.Data.map((x,i) => 
        <div key={x.id} className="container">
            <FormHeader />
            <ApplicantInfos applis={x} appoints={currAppointments.Data[i]}/>
            <FormButtons />
        </div>))

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