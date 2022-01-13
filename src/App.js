import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Routes from "./Routes";

import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanel/SidePanel";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <SidePanel />
      <Container>
        <Header />
        <Routes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
