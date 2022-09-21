import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";

import {
  loadAllJobs,
  loadJob,
  saveNewJob,
  saveEditedJob,
  deleteJobById,
  deleteManyJobs,
} from "./thunks/jobThunks";

import { sanitiseDataForTable } from "../../common/utilities/sanitise";
import { Job } from "../../common/types/job";

interface JobState {
  loading: boolean;
  jobs: Job[] | null;
  jobsForTable: Job[] | null;
  currentJob: Job | null;
  error: boolean;
}

const initialState: JobState = {
  loading: false,
  jobs: null,
  jobsForTable: null,
  currentJob: null,
  error: false,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setCurrentJob: (state, action: PayloadAction<Job>) => {
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
        state.jobsForTable = action.payload.sanitisedJobs;
      })
      .addCase(loadJob.fulfilled, (state, action: PayloadAction<Job | boolean>) => {
        state.loading = false;
        if (typeof action.payload !== "boolean") {
          state.currentJob = action.payload;
        }
      })
      .addCase(saveNewJob.fulfilled, (state, action: PayloadAction<Job>) => {
        state.loading = false;
        state.jobs!.push(action.payload);
        state.jobsForTable = sanitiseDataForTable([...state.jobs!]);
      })
      .addCase(saveEditedJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs!.map((job) => {
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
        state.jobs = state.jobs!.filter((job) => job.id !== action.payload);
        state.jobsForTable = sanitiseDataForTable([...state.jobs]);
        state.currentJob = null;
      })
      .addCase(deleteManyJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs!.filter((job) => !action.payload.includes(job.id!));
      })
      .addMatcher(
        isAnyOf(
          loadAllJobs.pending,
          loadJob.pending,
          saveNewJob.pending,
          saveEditedJob.pending,
          deleteJobById.pending,
          deleteManyJobs.pending
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
          deleteJobById.rejected,
          deleteManyJobs.rejected
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
