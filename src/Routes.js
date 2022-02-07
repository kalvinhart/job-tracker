import { Routes as RoutesList, Route } from "react-router-dom";
import Layout from "./components/shared/Layout/Layout";
import JobPage from "./components/job/JobPage";
import JobsPage from "./components/jobs/JobsPage";
import LoginPage from "./components/login/LoginPage";

const Routes = () => {
  return (
    <RoutesList>
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/" element={<Layout />}>
        <Route path="job-list" element={<JobsPage />} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="job/:id" element={<JobPage />} />
      </Route>
    </RoutesList>
  );
};

export default Routes;
