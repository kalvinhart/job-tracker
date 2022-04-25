import {
  collection,
  deleteDoc,
  deleteField,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { v4 as uuid } from "uuid";

export const fetchJobs = async (uid) => {
  let jobsArray = [];

  const q = query(collection(db, "jobs"), where("userID", "==", uid));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const newData = { id: doc.id, ...doc.data() };
    jobsArray.push(newData);
  });

  return jobsArray;
};

export const saveJob = async (data) => {
  const id = uuid();
  const newData = {
    ...data,
    id,
    date: new Date(data.date).getTime(),
    status: "Pending",
  };

  await setDoc(doc(db, "jobs", id), newData);

  return newData;
};

export const saveUpdate = async (data) => {
  const newData = {
    ...data,
    date: new Date(data.date).getTime(),
  };
  const docRef = doc(db, "jobs", newData.id);

  await updateDoc(docRef, newData);

  return newData;
};

export const deleteJob = async (id) => {
  await deleteDoc(doc(db, "jobs", id));
};

export const updateInterview = async (id, data) => {
  const interviewDate = new Date(data).getTime();
  const jobRef = doc(db, "jobs", id);

  await updateDoc(jobRef, { interview: interviewDate, status: "Interview" });

  return interviewDate;
};

export const deleteInterview = async (id) => {
  const jobRef = doc(db, "jobs", id);
  await updateDoc(jobRef, { interview: deleteField(), status: "Pending" });
  return "";
};
