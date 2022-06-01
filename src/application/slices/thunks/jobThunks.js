import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import { sanitiseDataForTable } from "../../../presentation/utilities/sanitise";

import { closeSidePanel, setShowAppointmentModal } from "../uiSlice";

export const loadAllJobs = createAsyncThunk(
  "job/loadAllJobs",
  async (uid, { rejectWithValue, extra: { serviceApi } }) => {
    try {
      const rawJobs = await serviceApi.getJobs(uid);
      const sanitsedJobs = sanitiseDataForTable(rawJobs);
      return { rawJobs, sanitsedJobs };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const loadJob = createAsyncThunk(
  "job/loadJob",
  async (id, { rejectWithValue, extra: { serviceApi } }) => {
    try {
      const job = await serviceApi.getJob(id);
      if (job) {
        return job;
      } else {
        return rejectWithValue("Job does not exist");
      }
    } catch (err) {
      console.log(err.message);
    }
  }
);

export const saveNewJob = createAsyncThunk(
  "job/saveNewJob",
  async (data, { dispatch, rejectWithValue, extra: { serviceApi } }) => {
    try {
      const newJob = await serviceApi.createJob(data);
      toast.success("Job successfully saved!");
      dispatch(closeSidePanel());
      return newJob;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const saveEditedJob = createAsyncThunk(
  "job/saveEditedJob",
  async (data, { dispatch, rejectWithValue, extra: { serviceApi } }) => {
    try {
      const editedJob = await serviceApi.updateJob(data);
      toast.success("Job successfully updated!");
      dispatch(setShowAppointmentModal(false));
      dispatch(closeSidePanel());
      return editedJob;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteJobById = createAsyncThunk(
  "job/deleteJobById",
  async (id, { rejectWithValue, extra: { serviceApi } }) => {
    try {
      await serviceApi.deleteJob(id);
      toast.success("Job deleted!");
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
