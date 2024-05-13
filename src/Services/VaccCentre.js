import axios from 'axios';
import { setVaccCentres } from '../app/VaccCentreReducer';


const axiosInstance = axios.create({
    baseURL: 'https://localhost:7015/VaccCentre',
})

export const GetAllStates = async (dispatch) => {
    try {
        const { data } = await axiosInstance.get();
        dispatch(setVaccCentres(data));
        console.log(data);
    } catch (error) {
        console.log("Exception Thrown: " + error);
    }
}