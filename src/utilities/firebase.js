import {
  collection,
  deleteDoc,
  deleteField,
  doc,
  getDocs,
  query,
  setDoc,
  Timestamp,
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
    date: Timestamp.fromDate(new Date(data.date)),
    status: "Pending",
  };

  const docRef = await setDoc(doc(db, "jobs", id), newData);

  return newData;
};

export const saveUpdate = async (data) => {
  const newData = {
    ...data,
    date: Timestamp.fromDate(new Date(data.date)),
    interview:
      typeof data.interview !== "object" && data.interview !== ""
        ? Timestamp.fromDate(new Date(data.interview))
        : data.interview,
  };
  const docRef = doc(db, "jobs", newData.id);

  await updateDoc(docRef, newData);

  return newData;
};

export const deleteJob = async (id) => {
  await deleteDoc(doc(db, "jobs", id));
};

export const updateInterview = async (id, data) => {
  const interviewDate = Timestamp.fromDate(new Date(data));
  const jobRef = doc(db, "jobs", id);

  await updateDoc(jobRef, { interview: interviewDate, status: "Interview" });

  return interviewDate;
};

export const deleteInterview = async (id) => {
  const jobRef = doc(db, "jobs", id);
  await updateDoc(jobRef, { interview: deleteField(), status: "Pending" });
  return "";
};
