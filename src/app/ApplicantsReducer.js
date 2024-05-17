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
        },
        updateApplicant: (state, action) => {
            const applicants = state.Applicants.map(applicant => {
                if(applicant.applicant_id == action.payload.applicant_id)
                    {
                        applicant = action.payload;
                    }
                return applicants;
            })
            return {...state, Applicants: [...applicants]}
        },
    }
});

export const {setApplicants, setApplicant, newApplicant, updateApplicant} = ApplicantsReducer.actions;
export default ApplicantsReducer.reducer;