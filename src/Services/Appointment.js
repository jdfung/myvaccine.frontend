import { setAppointments, setAppointment, newAppointment } from "../app/AppointmentReducer";
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7015/Appointments',

})

export const GetAppointments = async (dispatch) => {
    try {
        //API call
        const { data } = await axiosInstance.get();
        dispatch(setAppointments(data));
    } catch (error) {
        console.log("Exception thrown: " + error);
    }
}

export const GetSpeciAppointment = async (dispatch, name, ic) => {
    try {
        const { data } = await axiosInstance.get('IcName', {
            params: {
                name: name,
                ic: ic
            }
        });
        dispatch(setAppointment(data));
        // console.log(data);

    } catch (error) {
        console.log("Exception thrown: " + error);
    }
}

export const AddAppointment = async (dispatch, appointment) => {
    try {
        const { data } = await axiosInstance.post('', appointment);
        dispatch(newAppointment(data));
    } catch (error) {
        console.log("Exception thrown: " + error);
    }
}