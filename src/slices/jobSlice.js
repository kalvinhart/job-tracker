import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchJobs, saveJob } from "../utilities/firebase";
import { sanitiseDataForTable } from "../utilities/sanitise";

export const loadAllJobs = createAsyncThunk("job/getJobs", async (uid) => {
  try {
    const rawJobs = await fetchJobs(uid);
    const sanitsedJobs = sanitiseDataForTable(rawJobs);
    return { rawJobs, sanitsedJobs };
  } catch (err) {
    console.log(err.message);
  }
});

export const saveNewJob = createAsyncThunk("job/saveNewJob", async (data) => {
  try {
    const newJob = await saveJob(data);
    return newJob;
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
    error: false,
  },
  reducers: {
    getJobs: (state, action) => {
      state.loading = false;
      state.error = false;
      state.jobs = action.payload.rawJobs;
      state.jobsForTable = action.payload.sanitsedJobs;
    },
    saveNewJob: (state, action) => {
      state.loading = false;
      state.error = false;
      state.jobs.push(action.payload);
      state.jobsForTable.push(sanitiseDataForTable(action.payload));
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
      });
  },
});

export const {} = jobSlice.actions;

export default jobSlice.reducer;
