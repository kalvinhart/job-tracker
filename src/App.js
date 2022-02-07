import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Routes from "./Routes";

import Container from "./components/shared/Container/Container";
import Header from "./components/shared/Header/Header";
import SidePanel from "./components/shared/SidePanel/SidePanel";
import JobProvider from "./context/jobContext";

function App() {
  return (
    <BrowserRouter>
      <JobProvider>
        <GlobalStyles />
        <SidePanel />
        <Container>
          <Header />
          <Routes />
        </Container>
      </JobProvider>
    </BrowserRouter>
  );
}

export default App;
