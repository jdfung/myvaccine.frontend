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
            return {...state, Appointments: action.payload}
        },
        newAppointment: (state, action) => {
            return {...state, Appointments: [action.payload, ...state.Appointments]}
        },
        updateAppointmentName: (state, action) => {
            const appointment = state.Appointments.map(appointment => {
                if(appointment.appointment_id == action.payload.appointment_id)
                    {
                        appointment = action.payload
                    }
                return appointment
            })
            return {...state, Appointments: [...appointment]}
        },
    }
});

export const {setAppointments, setAppointment, newAppointment, updateAppointmentName} = AppointmentReducer.actions;
export default AppointmentReducer.reducer;