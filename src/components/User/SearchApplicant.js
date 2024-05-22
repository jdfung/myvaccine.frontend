import { Form, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faIdCard } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


export default () => {

    const [formData, setFormData] = useState({
        Name: '',
        Ic: ''
    })
    const navigate = useNavigate();

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

    const handleSubmit = (event) => {
        event.preventDefault();

        const submitData = {
            ...formData
        };

        navigate('/ApplicantInfo', {
            state: submitData
        })
    }


    return (<div className="container pt-5 pb-5 text-center ">
        <Card className="bg-light">
            <h1 className="m-3 text-center">MyVaccine Reservation System</h1>
            <Form className="m-3" method="get" onSubmit={handleSubmit}>
                <div className="input-group pb-3">
                    <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span>
                    <Form.Control type="text" className="form-control" placeholder="Name" aria-label="Username" name="Name" aria-describedby="basic-addon1" onChange={(e) => handleChange(e)} required/>
                </div>

                <div className="input-group pb-3">
                    <span className="input-group-text" id="basic-addon2"><FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon></span>
                    <Form.Control type="text" className="form-control" placeholder="IC" aria-label="IC" name="Ic" aria-describedby="basic-addon2" onChange={(e) => handleChange(e)} required/>
                </div>

                <div className="form-group text-center pb-3">
                    <button type="submit" className="btn btn-primary btn-block mx-3" >Search</button>
                    <Link to="/Home" className='btn btn-danger btn-block mx-3'>Cancel</Link>
                </div>
            </Form>
        </Card>
    </div>)
}