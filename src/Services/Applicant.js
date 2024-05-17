import { useNavigate } from "react-router-dom";
import { setApplicant, setApplicants, newApplicant, updateApplicant } from "../app/ApplicantsReducer";
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7015/Applicants',
})

export const GetApplicant = async (dispatch) => {
    //API call
    await axiosInstance.get()
    .then((result) => {
        dispatch(setApplicants(result.data))
        
    }).catch((err) => {
        console.log("Exception thrown: " + err);
    })
}

export const GetSpeciApplicant = async (dispatch, name, ic) => {
    await axiosInstance.get('IcName', {
            params: {
                name: name,
                ic: ic
            }
        })
        .then((result) => {
            dispatch(setApplicant(result.data))
        }).catch((err) => {
            dispatch(setApplicant(err.response.status));
            console.log("Exception thrown: " + err);
        })
        
}

export const GetSpeciApplicantByID = async (dispatch, id) => {
    await axiosInstance.get('/GetByID/' + id)
    .then((result) => {
        dispatch(setApplicant(result.data))
    }).catch((err) => {
        console.log("Exception thrown: " + err)
    })
}

export const GetSpeciApplicantByIc = async (dispatch, ic) => {
    const response = await axiosInstance.get('/GetByIc/' + ic)
    .then((result) => {
        return result.status
    }).catch((err) => {
        return err.response.status
    })
    return response
}


export const AddApplicants = async (dispatch, applicant) => {

    await axiosInstance.post('', applicant)
    .then((result) => {
        dispatch(newApplicant(result.data));
        return result.status
        
    }).catch((err) => {
        console.log("Exception thrown: " + err);
    })

}

export const UpdateApplicant = async (dispatch, applicant) => {
    //API call
    await axiosInstance.put('', applicant)
    .then((result) => {
        dispatch(updateApplicant(result.data));
        return result.status
    }).catch((err) => {
        console.log("Exception thrown: " + err);
    })
}