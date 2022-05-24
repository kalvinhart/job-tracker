import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import {
  fetchJobs,
  fetchJob,
  saveJob,
  saveUpdate,
  deleteJob,
} from "../../utilities/firebase";
import { sanitiseDataForTable } from "../../utilities/sanitise";

import { closeSidePanel, setShowAppointmentModal } from "../uiSlice";

export const loadAllJobs = createAsyncThunk("job/loadAllJobs", async (uid) => {
  try {
    const rawJobs = await fetchJobs(uid);
    const sanitsedJobs = sanitiseDataForTable(rawJobs);
    return { rawJobs, sanitsedJobs };
  } catch (err) {
    console.log(err.message);
  }
});

export const loadJob = createAsyncThunk("job/loadJob", async (id) => {
  try {
    const job = await fetchJob(id);
    if (job) {
      return job;
    } else {
      throw new Error("Job does not exist");
    }
  } catch (err) {
    console.log(err.message);
  }
});

export const saveNewJob = createAsyncThunk(
  "job/saveNewJob",
  async (data, { dispatch }) => {
    try {
      const newJob = await saveJob(data);
      toast.success("Job successfully saved!");
      dispatch(closeSidePanel());
      return newJob;
    } catch (err) {
      console.log(err.message);
    }
  }
);

export const saveEditedJob = createAsyncThunk(
  "job/saveEditedJob",
  async (data, { dispatch }) => {
    try {
      const editedJob = await saveUpdate(data);
      toast.success("Job successfully updated!");
      dispatch(setShowAppointmentModal(false));
      dispatch(closeSidePanel());
      return editedJob;
    } catch (err) {
      console.log(err.message);
    }
  }
);

export const deleteJobById = createAsyncThunk("job/deleteJobById", async (id) => {
  try {
    await deleteJob(id);
    toast.success("Job deleted!");
    return id;
  } catch (err) {
    console.log(err.message);
  }
});
