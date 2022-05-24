import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import GlobalStyles from "./GlobalStyles";
import Routes from "./Routes";

import AuthProvider from "./context/authContext";
import { Toaster } from "react-hot-toast";
import Layout from "./components/shared/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles />
        <Toaster position="bottom-right" />
        <AuthProvider>
          <Layout>
            <Routes />
          </Layout>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
