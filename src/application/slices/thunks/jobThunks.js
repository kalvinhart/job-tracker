import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import FirebaseService from "../../../infrastructure/api/FirebaseService/FirebaseService";
import { sanitiseDataForTable } from "../../../presentation/utilities/sanitise";

import { closeSidePanel, setShowAppointmentModal } from "../uiSlice";

export const loadAllJobs = createAsyncThunk(
  "job/loadAllJobs",
  async (uid, { rejectWithValue }) => {
    try {
      const firebaseService = new FirebaseService();
      const rawJobs = await firebaseService.getJobs(uid);
      const sanitsedJobs = sanitiseDataForTable(rawJobs);
      return { rawJobs, sanitsedJobs };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const loadJob = createAsyncThunk(
  "job/loadJob",
  async (id, { rejectWithValue }) => {
    try {
      const firebaseService = new FirebaseService();
      const job = await firebaseService.getJob(id);
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
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const firebaseService = new FirebaseService();
      const newJob = await firebaseService.createJob(data);
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
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const firebaseService = new FirebaseService();
      const editedJob = await firebaseService.updateJob(data);
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
  async (id, { rejectWithValue }) => {
    try {
      const firebaseService = new FirebaseService();
      await firebaseService.deleteJob(id);
      toast.success("Job deleted!");
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
