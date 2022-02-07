import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Routes from "./Routes";

import JobProvider from "./context/jobContext";
import AuthProvider from "./context/authContext";

function App() {
  return (
    <BrowserRouter>
      <JobProvider>
        <AuthProvider>
          <GlobalStyles />
          <Routes />
        </AuthProvider>
      </JobProvider>
    </BrowserRouter>
  );
}

export default App;
