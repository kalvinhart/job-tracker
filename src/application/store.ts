import {
  AnyAction,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit";

import uiReducer from "./slices/uiSlice";
import jobReducer from "./slices/jobSlice";
import JobService from "../infrastructure/services/JobService/JobService";
import FirebaseService from "../infrastructure/api/FirebaseService/FirebaseService";
import { IJobService } from "../infrastructure/interfaces/IJobService";

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

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface AsyncThunkConfig<T> {
  extra: {
    serviceApi: IJobService;
  };
  rejectValue: T;
}

export default store;
