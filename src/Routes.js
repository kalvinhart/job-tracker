import { Routes as RoutesList, Route } from "react-router-dom";
import JobPage from "./components/job/JobPage";
import JobsPage from "./components/jobs/JobsPage";

const Routes = () => {
  return (
    <RoutesList>
      <Route path="/" element={<JobsPage />} />
      <Route path="/job/:id" element={<JobPage />} />
    </RoutesList>
  );
};

export default Routes;
