import { Routes as RoutesList, Route } from "react-router-dom";
import JobView from "./components/job/JobView/JobView";
import JobsPage from "./components/jobs/JobsPage";

const Routes = () => {
  return (
    <RoutesList>
      <Route path="/" element={<JobsPage />} />
      <Route path="/job/:id" element={<JobView />} />
    </RoutesList>
  );
};

export default Routes;
