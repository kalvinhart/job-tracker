import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchJobs,
  fetchJob,
  saveJob,
  saveUpdate,
  deleteJob,
} from "../utilities/firebase";
import { sanitiseDataForTable } from "../utilities/sanitise";
import { closeSidePanel, setShowAppointmentModal } from "./uiSlice";

import { toast } from "react-hot-toast";

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

const jobSlice = createSlice({
  name: "job",
  initialState: {
    loading: true,
    jobs: null,
    jobsForTable: null,
    currentJob: null,
    error: false,
  },
  reducers: {
    setCurrentJob: (state, action) => {
      state.currentJob = action.payload;
    },
    clearJobState: (state) => {
      state.loading = true;
      state.error = false;
      state.jobs = null;
      state.jobsForTable = null;
      state.currentJob = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadAllJobs.pending, (state, action) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(loadAllJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload.rawJobs;
        state.jobsForTable = action.payload.sanitsedJobs;
      })
      .addCase(loadAllJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(loadJob.pending, (state, action) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(loadJob.fulfilled, (state, action) => {
        state.loading = false;
        state.currentJob = action.payload;
      })
      .addCase(loadJob.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(saveNewJob.pending, (state, action) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(saveNewJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs.push(action.payload);
        state.jobsForTable = sanitiseDataForTable([...state.jobs]);
      })
      .addCase(saveNewJob.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(saveEditedJob.pending, (state, action) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(saveEditedJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs.map((job) => {
          if (job.id === action.payload.id) {
            return action.payload;
          } else {
            return job;
          }
        });
        state.jobsForTable = sanitiseDataForTable([...state.jobs]);
        state.currentJob = action.payload;
      })
      .addCase(saveEditedJob.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteJobById.pending, (state, action) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteJobById.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs.filter((job) => job.id !== action.payload);
        state.jobsForTable = sanitiseDataForTable([...state.jobs]);
        state.currentJob = null;
      })
      .addCase(deleteJobById.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setCurrentJob, clearJobState } = jobSlice.actions;

export default jobSlice.reducer;
