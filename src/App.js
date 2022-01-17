import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Routes from "./Routes";

import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanel/SidePanel";
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
