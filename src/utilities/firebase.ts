//@ts-nocheck
import {
  collection,
  deleteDoc,
  deleteField,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase.config";
import { v4 as uuid } from "uuid";

import { Job } from "../types/jobTypes";

export const fetchJobs = async (uid: string): Promise<Job[]> => {
  let jobsArray: Job[] = [];

  const q = query(collection(db, "jobs"), where("user", "==", uid));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const newData = { id: doc.id, ...doc.data() };
    jobsArray.push(newData);
  });

  return jobsArray;
};

export const fetchJob = async (id: string): Promise<Job | boolean> => {
  const docRef = doc(db, "jobs", id);

  const result = await getDoc(docRef);

  if (result.exists()) {
    return result.data();
  } else {
    return false;
  }
};

export const saveJob = async (data: Job): Promise<Job> => {
  const id = uuid();
  const newData: Job = {
    ...data,
    id,
    date: new Date(data.date).getTime(),
    status: "Pending",
  };

  await setDoc(doc(db, "jobs", id), newData);

  return newData;
};

export const saveUpdate = async (data: Job): Promise<Job> => {
  const newData = {
    ...data,
    date: new Date(data.date).getTime(),
  };
  const docRef = doc(db, "jobs", newData.id);

  await updateDoc(docRef, newData);

  return newData;
};

export const deleteJob = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, "jobs", id));
};

export const deleteInterview = async (id: string): Promise<string> => {
  const jobRef = doc(db, "jobs", id);
  await updateDoc(jobRef, { interview: deleteField(), status: "Pending" });
  return "";
};
