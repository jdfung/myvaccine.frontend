import { createSlice } from "@reduxjs/toolkit";

export const ApplicantsReducer = createSlice({
    name: 'Applicants',
    initialState: {
        Applicants: []
    },
    reducers: {
        setApplicants: (state, action) => {
            return {...state, Applicants: [...action.payload]}
        },
        setApplicant: (state, action) => {
            return {...state, Applicants: [action.payload]}
        },
        newApplicant: (state, action) => {
            return {...state, Applicants: [action.payload, ...state.Applicants]}
        }
    }
});

export const {setApplicants, setApplicant, newApplicant} = ApplicantsReducer.actions;
export default ApplicantsReducer.reducer;