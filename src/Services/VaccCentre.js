import axios from 'axios';
import { setVaccCentres, setStateAndDistricts } from '../app/VaccCentreReducer';


const axiosInstance = axios.create({
    baseURL: 'https://localhost:7015/VaccCentre',
})

export const GetAllRecords = async (dispatch) => {
    try {
        const { data } = await axiosInstance.get();
        dispatch(setVaccCentres(data));
    } catch (error) {
        console.log("Exception Thrown: " + error);
    }

}

export const GetAllStates = async (dispatch, state) => {
    try {
        const { data } = await axiosInstance.get('state', {
            params:{
            state: state
        }})
        dispatch(setStateAndDistricts(data));
    } catch (error) {
        console.log("Exception Thrown: " + error);
    }
}

export const GetAllStatesAndDistricts = async (dispatch) => {
    try {
        const { data } = await axiosInstance
    } catch (error) {
        console.log("Exception Thrown: " + error);
    }
}