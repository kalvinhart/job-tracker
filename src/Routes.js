import { lazy, Suspense } from "react";
import { Routes as RoutesList, Route } from "react-router-dom";

import Spinner from "./components/shared/Spinner/Spinner";

import PrivateRoute from "./components/shared/PrivateRoute/PrivateRoute";
const JobPage = lazy(() => import("./components/job/JobPage"));
const JobsPage = lazy(() => import("./components/jobs/JobsPage"));
const LoginPage = lazy(() => import("./components/login/LoginPage"));
const RegisterPage = lazy(() => import("./components/register/RegisterPage"));
const ForgotPassword = lazy(() =>
  import("./components/login/ForgotPassword/ForgotPassword")
);

const Routes = () => {
  return (
    <RoutesList>
      <Route
        path="/signin"
        element={
          <Suspense fallback={<Spinner />}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<Spinner />}>
            <RegisterPage />
          </Suspense>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <Suspense fallback={<Spinner />}>
            <ForgotPassword />
          </Suspense>
        }
      />

      <Route path="/" element={<PrivateRoute />}>
        <Route
          path="job-list"
          element={
            <Suspense fallback={<Spinner />}>
              <JobsPage />
            </Suspense>
          }
        />

        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              <JobsPage />
            </Suspense>
          }
        />

        <Route
          path="job/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <JobPage />
            </Suspense>
          }
        />
      </Route>
    </RoutesList>
  );
};

export default Routes;
