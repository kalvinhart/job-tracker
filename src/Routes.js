import { Routes as RoutesList, Route } from "react-router-dom";
import JobView from "./components/job/JobView/JobView";
import Table from "./components/jobs/Table/Table";

const Routes = () => {
  return (
    <RoutesList>
      <Route path="/" element={<Table />} />
      <Route path="/job/:id" element={<JobView />} />
    </RoutesList>
  );
};

export default Routes;
