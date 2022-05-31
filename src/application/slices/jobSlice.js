import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import {
  loadAllJobs,
  loadJob,
  saveNewJob,
  saveEditedJob,
  deleteJobById,
} from "./thunks/jobThunks";

import { sanitiseDataForTable } from "../../presentation/utilities/sanitise";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    loading: false,
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
      state.loading = false;
      state.error = false;
      state.jobs = null;
      state.jobsForTable = null;
      state.currentJob = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadAllJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload.rawJobs;
        state.jobsForTable = action.payload.sanitsedJobs;
      })
      .addCase(loadJob.fulfilled, (state, action) => {
        state.loading = false;
        state.currentJob = action.payload;
      })
      .addCase(saveNewJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs.push(action.payload);
        state.jobsForTable = sanitiseDataForTable([...state.jobs]);
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
      .addCase(deleteJobById.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs.filter((job) => job.id !== action.payload);
        state.jobsForTable = sanitiseDataForTable([...state.jobs]);
        state.currentJob = null;
      })
      .addMatcher(
        isAnyOf(
          loadAllJobs.pending,
          loadJob.pending,
          saveNewJob.pending,
          saveEditedJob.pending,
          deleteJobById.pending
        ),
        (state, action) => {
          state.error = false;
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          loadAllJobs.rejected,
          loadJob.rejected,
          saveNewJob.rejected,
          saveEditedJob.rejected,
          deleteJobById.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { setCurrentJob, clearJobState } = jobSlice.actions;

export default jobSlice.reducer;
