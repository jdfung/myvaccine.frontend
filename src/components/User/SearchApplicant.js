import { Form, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faIdCard } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { GetSpeciApplicant } from "../../Services/Applicant";
import { useDispatch } from "react-redux";


export default () => {

    const [formData, setFormData] = useState({
        Name: '',
        Ic: ''
    })
    const [existingUser, setExistingUser] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const status = await GetSpeciApplicant(dispatch, formData.Name, formData.Ic);

        const submitData = {
            ...formData
        };

        if(status == 200)
            {
                navigate('/ApplicantInfo', {
                    state: submitData
                })
            }
        else{
            setExistingUser(false);
        }
        
    }


    return existingUser
    ?(<div className="container pt-5 pb-5 text-center h-100 d-flex flex-column justify-content-center">
        <h1 className="m-3 text-center">MyVaccine Reservation System</h1>
        <Card className="bg-light">
            <h3 className="mt-3">Search for your application</h3>
            <Form className="m-3" method="get" onSubmit={handleSubmit}>
                <div className="input-group pb-3">
                    <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span>
                    <Form.Control type="text" className="form-control" placeholder="Name" aria-label="Username" name="Name" aria-describedby="basic-addon1" onChange={(e) => handleChange(e)} required/>
                </div>

                <div className="input-group pb-3">
                    <span className="input-group-text" id="basic-addon2"><FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon></span>
                    <Form.Control type="text" className="form-control" maxLength={12} placeholder="IC" aria-label="IC" name="Ic" aria-describedby="basic-addon2" onChange={(e) => handleChange(e)} required/>
                </div>

                <div className="form-group text-center pb-3">
                    <button type="submit" className="btn btn-primary btn-responsive btn-block mx-3" >Search</button>
                    <Link to="/" className='btn btn-danger btn-responsive btn-block mx-3'>Cancel</Link>
                </div>
            </Form>
        </Card>
    </div>)
        :(<div className="container text-center p-3 h-100 d-flex flex-column justify-content-center">
            <h1>This Applicant does not exists</h1>
            <p>The Name or the IC number may be incorrect</p>
            <Link className="btn btn-danger btn-responsive align-self-center" onClick={() => setExistingUser(true)}>Back</Link>
        </div>)
}