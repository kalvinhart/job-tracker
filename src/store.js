import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./slices/uiSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export default store;
