import { Routes as RoutesList, Route } from "react-router-dom";
import Table from "./components/Table/Table";

const Routes = () => {
  return (
    <RoutesList>
      <Route path="/" element={<Table />} />
    </RoutesList>
  );
};

export default Routes;
