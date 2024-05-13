import { createSlice } from "@reduxjs/toolkit";

export const VaccCentreReducer = createSlice({
    name: 'VaccCentres',
    initialState: {
        VaccCentres: [],
    },
    reducers: {
        setVaccCentres: (state, action) => {
            return { ...state, Appointments: [...action.payload] }
        }
    }
})

export const { setVaccCentres } = VaccCentreReducer.actions;
export default VaccCentreReducer.reducer