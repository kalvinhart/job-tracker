import { Routes as RoutesList, Route } from "react-router-dom";

import PrivateRoute from "./components/shared/PrivateRoute/PrivateRoute";
import JobPage from "./components/job/JobPage";
import JobsPage from "./components/jobs/JobsPage";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
import ForgotPassword from "./components/login/ForgotPassword/ForgotPassword";

const Routes = () => {
  return (
    <RoutesList>
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/" element={<PrivateRoute />}>
        <Route path="job-list" element={<JobsPage />} />

        <Route path="/" element={<JobsPage />} />

        <Route path="job/:id" element={<JobPage />} />
      </Route>
    </RoutesList>
  );
};

export default Routes;
