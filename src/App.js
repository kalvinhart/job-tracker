import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Routes from "./Routes";

import JobProvider from "./context/jobContext";

function App() {
  return (
    <BrowserRouter>
      <JobProvider>
        <GlobalStyles />
        <Routes />
      </JobProvider>
    </BrowserRouter>
  );
}

export default App;
