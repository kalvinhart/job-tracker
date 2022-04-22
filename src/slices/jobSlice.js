import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchJobs } from "../utilities/firebase";
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
      });
  },
});

export const {} = jobSlice.actions;

export default jobSlice.reducer;
