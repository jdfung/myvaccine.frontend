import { configureStore } from '@reduxjs/toolkit';
import ApplicantsReducer from './ApplicantsReducer';
import AppointmentReducer from './AppointmentReducer';
import VaccCentreReducer from './VaccCentreReducer';


export const store = configureStore({
  reducer: {
    ApplicantsReducer: ApplicantsReducer,
    AppointmentReducer: AppointmentReducer,
    VaccCentreReducer: VaccCentreReducer,
  },
});
