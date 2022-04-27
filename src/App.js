import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import GlobalStyles from "./GlobalStyles";
import Routes from "./Routes";

import AuthProvider from "./context/authContext";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
