import { createSlice } from "@reduxjs/toolkit";

export const VaccCentreReducer = createSlice({
    name: 'VaccCentres',
    initialState: {
        VaccCentres: [],
    },
    reducers: {
        setVaccCentres: (state, action) => {
            return { ...state, VaccCentres: [...action.payload] }
        },
        setStateAndDistricts: (state, action) => {
            return { ...state, VaccCentres: [...action.payload] }
        }
    }
})

export const { setVaccCentres, setStateAndDistricts } = VaccCentreReducer.actions;
export default VaccCentreReducer.reducer