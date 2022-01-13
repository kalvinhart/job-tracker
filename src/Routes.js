import { Routes as RoutesList, Route } from "react-router-dom";
import JobView from "./components/JobView/JobView";
import Table from "./components/Table/Table";

const Routes = () => {
  return (
    <RoutesList>
      <Route path="/" element={<Table />} />
      <Route path="/job/:id" element={<JobView />} />
    </RoutesList>
  );
};

export default Routes;
