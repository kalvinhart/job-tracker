import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";

import {
  loadAllJobs,
  loadJob,
  saveNewJob,
  saveEditedJob,
  deleteJobById,
  deleteManyJobs,
} from "./thunks/jobThunks";

import { Job } from "../../common/types/job";

interface JobState {
  loading: boolean;
  loadJobsComplete: boolean;
  jobs: Job[];
  currentJob: Job | null;
  error: boolean;
}

const initialState: JobState = {
  loading: false,
  loadJobsComplete: false,
  jobs: [],
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
      state.loadJobsComplete = false;
      state.error = false;
      state.jobs = [];
      state.currentJob = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadAllJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.loadJobsComplete = true;
        state.jobs = action.payload.sort((a, b) => +a.date - +b.date);
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
        state.currentJob = action.payload;
      })
      .addCase(deleteJobById.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs!.filter((job) => job.id !== action.payload);
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
