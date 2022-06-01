import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../../../application/context/authContext";
import { useJobSlice } from "../../../hooks/useJobSlice/useJobSlice";

export const useJob = () => {
  const dispatch = useDispatch();

  const { user } = useContext(AuthContext);
  const { loading, jobs, currentJob, error, loadAllJobs, loadJob, deleteJobById } =
    useJobSlice();

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentJob) return;

    if (user) {
      if (!jobs && !loading) {
        return loadAllJobs(user);
      }

      if (jobs && params.id && !currentJob && !error && !loading) {
        return loadJob(params.id);
      }
    }
  }, [jobs, currentJob, dispatch, loadAllJobs, loadJob, user]);

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [error]);

  return {
    loading,
    currentJob,
    deleteJobById: (id) => deleteJobById(id),
  };
};
