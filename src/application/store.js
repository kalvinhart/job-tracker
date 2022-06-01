import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import uiReducer from "./slices/uiSlice";
import jobReducer from "./slices/jobSlice";
import JobService from "../infrastructure/services/JobService/JobService";
import FirebaseService from "../infrastructure/api/FirebaseService/FirebaseService";

const firebaseService = new FirebaseService();
const serviceApi = new JobService(firebaseService);

const store = configureStore({
  reducer: {
    ui: uiReducer,
    job: jobReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { serviceApi },
      },
    }),
});

export default store;
