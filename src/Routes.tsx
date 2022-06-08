import { lazy, Suspense } from "react";
import { Routes as RoutesList, Route } from "react-router-dom";

import Spinner from "./presentation/components/Spinner/Spinner";

import PrivateRoute from "./presentation/components/PrivateRoute/PrivateRoute";
const ErrorPage = lazy(() => import("./presentation/pages/error/ErrorPage"));
const JobPage = lazy(() => import("./presentation/pages/job/JobPage"));
const JobsPage = lazy(() => import("./presentation/pages/jobs/JobsPage"));
const LoginPage = lazy(() => import("./presentation/pages/login/LoginPage"));
const RegisterPage = lazy(() => import("./presentation/pages/register/RegisterPage"));
const ForgotPassword = lazy(
  () => import("./presentation/features/sign-in/ForgotPassword/ForgotPassword")
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

      <Route
        path="/error"
        element={
          <Suspense fallback={<Spinner />}>
            <ErrorPage />
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
