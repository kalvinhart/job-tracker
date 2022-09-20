import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { Job } from "../../../domain/entities/job";
import { JobResponse } from "../../../infrastructure/types/Response";

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
    const response: JobResponse = await serviceApi.getJobs(uid);

    const rawJobs = response.data as Job[];
    const sanitisedJobs = sanitiseDataForTable(rawJobs);
    return { rawJobs, sanitisedJobs };
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const loadJob = createAsyncThunk<
  Job,
  { token: string; id: string },
  AsyncThunkConfig<string>
>("job/loadJob", async (tokenAndID, { rejectWithValue, extra: { serviceApi } }) => {
  const { token, id } = tokenAndID;
  try {
    const response: JobResponse = await serviceApi.getJob(token, id);
    return response.data as Job;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const saveNewJob = createAsyncThunk<
  Job,
  { token: string; data: Job },
  AsyncThunkConfig<string>
>(
  "job/saveNewJob",
  async (tokenAndData, { dispatch, rejectWithValue, extra: { serviceApi } }) => {
    const { token, data } = tokenAndData;

    try {
      const response: JobResponse = await serviceApi.createJob(token, data);
      toast.success("Job successfully saved!");
      dispatch(closeSidePanel());
      return response.data as Job;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const saveEditedJob = createAsyncThunk<
  Job,
  { token: string; data: Job },
  AsyncThunkConfig<string>
>(
  "job/saveEditedJob",
  async (tokenAndData, { dispatch, rejectWithValue, extra: { serviceApi } }) => {
    const { token, data } = tokenAndData;

    try {
      const response = await serviceApi.updateJob(token, data);
      toast.success("Job successfully updated!");
      dispatch(setShowAppointmentModal(false));
      dispatch(closeSidePanel());
      return response.data as Job;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteJobById = createAsyncThunk<
  number,
  { token: string; id: string },
  AsyncThunkConfig<string>
>("job/deleteJobById", async (tokenAndID, { rejectWithValue, extra: { serviceApi } }) => {
  const { token, id } = tokenAndID;

  try {
    const response = await serviceApi.deleteJob(token, id);
    toast.success("Job deleted!");
    return (response.data as Job).id!;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export type DeleteJobType = ReturnType<typeof deleteJobById>;
