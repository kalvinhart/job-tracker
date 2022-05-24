import PrivateRoute from "./PrivateRoute";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";

const TestOutlet = () => <div>Success</div>;

describe("PrivateRoute", () => {
  test("navigates to /signin if no user is logged in", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <TestOutlet />
              </PrivateRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    );
  });
});
