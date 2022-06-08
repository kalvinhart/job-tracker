import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { Job } from "../../../domain/entities/job";

import { sanitiseDataForTable } from "../../../presentation/utilities/sanitise";
import { AsyncThunkConfig } from "../../store";

import { closeSidePanel, setShowAppointmentModal } from "../uiSlice";

type LoadAllJobsReturn = {
  rawJobs: Job[];
  sanitisedJobs: Job[];
};

export const loadAllJobs = createAsyncThunk<
  LoadAllJobsReturn,
  string,
  AsyncThunkConfig<any>
>("job/loadAllJobs", async (uid: string, { rejectWithValue, extra: { serviceApi } }) => {
  try {
    const rawJobs: Job[] = await serviceApi.getJobs(uid);
    const sanitisedJobs = sanitiseDataForTable(rawJobs);
    return { rawJobs, sanitisedJobs };
  } catch (err: any) {
    return rejectWithValue(err);
  }
});

export const loadJob = createAsyncThunk<Job | boolean, string, AsyncThunkConfig<string>>(
  "job/loadJob",
  async (id: string, { rejectWithValue, extra: { serviceApi } }) => {
    try {
      const job: Job | boolean = await serviceApi.getJob(id);
      if (job) {
        return job;
      } else {
        return rejectWithValue("Job does not exist");
      }
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const saveNewJob = createAsyncThunk<Job, Job, AsyncThunkConfig<string>>(
  "job/saveNewJob",
  async (data: Job, { dispatch, rejectWithValue, extra: { serviceApi } }) => {
    try {
      const newJob = await serviceApi.createJob(data);
      toast.success("Job successfully saved!");
      dispatch(closeSidePanel());
      return newJob;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const saveEditedJob = createAsyncThunk<Job, Job, AsyncThunkConfig<string>>(
  "job/saveEditedJob",
  async (data: Job, { dispatch, rejectWithValue, extra: { serviceApi } }) => {
    try {
      const editedJob = await serviceApi.updateJob(data);
      toast.success("Job successfully updated!");
      dispatch(setShowAppointmentModal(false));
      dispatch(closeSidePanel());
      return editedJob;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteJobById = createAsyncThunk<string, string, AsyncThunkConfig<string>>(
  "job/deleteJobById",
  async (id: string, { rejectWithValue, extra: { serviceApi } }) => {
    try {
      await serviceApi.deleteJob(id);
      toast.success("Job deleted!");
      return id;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export type DeleteJobType = ReturnType<typeof deleteJobById>;
