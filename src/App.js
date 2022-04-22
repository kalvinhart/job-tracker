import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import GlobalStyles from "./GlobalStyles";
import Routes from "./Routes";

import JobProvider from "./context/jobContext";
import AuthProvider from "./context/authContext";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <JobProvider>
          <AuthProvider>
            <GlobalStyles />
            <Routes />
          </AuthProvider>
        </JobProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
