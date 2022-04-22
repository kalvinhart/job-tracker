import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./slices/uiSlice";
import jobReducer from "./slices/jobSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    job: jobReducer,
  },
});

export default store;
