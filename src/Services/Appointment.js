import { setAppointments, setAppointment, newAppointment, updateAppointmentName } from "../app/AppointmentReducer";
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

export const UpdateAppointmentName = async (dispatch, id, name) => {
    await axiosInstance.put('UpdateNameIC', null, {
        params: {
            id: id,
            name: name
        }
    })
        .then((result) => {
            dispatch(updateAppointmentName(result.data));
            return result.status;
        }).catch((err) => {
            console.log("Exception thrown: " + err);
        })
}

export const DeleteAppointmentDate = async (id, doseNumber) => {
    const response = await axiosInstance.put('DeleteDate', null, {
        params: {
            id: id,
            dose: doseNumber
        }
    })
    .then((result) => {
        return result
    }).catch((err) => {
        console.log(err.response)
        return err.response.status;
    })

    return response;
}