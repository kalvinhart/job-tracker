import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { Job } from "../../../common/types/job";

import { AsyncThunkConfig } from "../../store";

import { setShowAppointmentModal } from "../uiSlice";

export const loadAllJobs = createAsyncThunk<Job[], string, AsyncThunkConfig<any>>(
  "job/loadAllJobs",
  async (uid: string, { rejectWithValue, extra: { serviceApi } }) => {
    try {
      const jobs: Job[] = await serviceApi.getJobs(uid);
      return jobs;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);

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

export const deleteManyJobs = createAsyncThunk<
  string[],
  string[],
  AsyncThunkConfig<string>
>(
  "job/deleteManyJobs",
  async (ids: string[], { rejectWithValue, extra: { serviceApi } }) => {
    try {
      await serviceApi.deleteMany(ids);
      toast.success("Jobs deleted!");
      return ids;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export type DeleteJobType = ReturnType<typeof deleteJobById>;
