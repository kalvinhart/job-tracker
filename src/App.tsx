import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import JobContextProvider from "./context/JobContext";
import AuthProvider from "./context/AuthContext";

import GlobalStyles from "./GlobalStyles";
import Routes from "./routing/Routes";

import { Layout } from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Toaster position="bottom-right" />
      <AuthProvider>
        <Layout>
          <JobContextProvider>
            <Routes />
          </JobContextProvider>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
