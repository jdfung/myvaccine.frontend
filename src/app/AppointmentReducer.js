import { createSlice } from "@reduxjs/toolkit";

export const AppointmentReducer = createSlice({
    name: 'Appointments',
    initialState: {
        Appointments: []
    },
    reducers: {
        setAppointments: (state, action) => {
            return {...state, Appointments: [...action.payload]}
        },
        setAppointment: (state, action) => {
            return {...state, Appointments: [action.payload]}
        },
        newAppointment: (state, action) => {
            return {...state, Appointments: [action.payload, ...state.Appointments]}
        }
    }
});

export const {setAppointments, setAppointment, newAppointment} = AppointmentReducer.actions;
export default AppointmentReducer.reducer;