import { useNavigate } from "react-router-dom";
import { setApplicant, setApplicants, newApplicant } from "../app/ApplicantsReducer";
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7015/Applicants',
})

export const GetApplicant = async (dispatch) => {
    try {
        //API call
        const { data } = await axiosInstance.get();
        dispatch(setApplicants(data));
    } catch (error) {
        console.log("Exception thrown: " + error);
    }
}

export const GetSpeciApplicant = async (dispatch, name, ic) => {
    try {
        const { data } = await axiosInstance.get('IcName', {
            params: {
                name: name,
                ic: ic
            }
        });
        dispatch(setApplicant(data))
        console.log(data)

    } catch (error) {
        dispatch(setApplicant(error.response.status));
        console.log("Exception thrown: " + error);
    }
}


export const AddApplicants = async (dispatch, applicant) => {
    try {
        //API call
        const { data } = await axiosInstance.post('', applicant);
        dispatch(newApplicant(data));

    } catch (error) {
        console.log("Exception thrown: " + error);
    }
}

export const UpdateApplicant = async (dispatch) => {
    try {
        //API call


    } catch (error) {
        console.log("Exception thrown: " + error);
    }
}