import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  deleteField,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { v4 as uuid } from "uuid";

export const fetchJobs = async () => {
  try {
    let jobsArray = [];

    const jobsRef = collection(db, "jobs");
    const querySnapshot = await getDocs(jobsRef);
    querySnapshot.forEach((doc) => {
      const newData = { id: doc.id, ...doc.data() };
      jobsArray.push(newData);
      console.log(doc.id, " => ", doc.data());
    });

    return jobsArray;
  } catch (e) {
    console.log(e.message);
  }
};

export const saveJob = async (data) => {
  const id = uuid();
  const newData = {
    ...data,
    id,
    date: Timestamp.fromDate(new Date(data.date)),
    status: "Pending",
  };

  try {
    const docRef = await setDoc(doc(db, "jobs", id), newData);
  } catch (e) {
    console.log(e.message);
  }

  return newData;
};

export const saveUpdate = async (data) => {
  const newData = {
    ...data,
    date: Timestamp.fromDate(new Date(data.date)),
    interview:
      typeof data.interview !== "object"
        ? Timestamp.fromDate(new Date(data.interview))
        : data.interview,
  };
  const docRef = doc(db, "jobs", newData.id);

  try {
    const update = await updateDoc(docRef, newData);
  } catch (e) {
    console.log(e.message);
  }

  return newData;
};

export const deleteJob = async (id) => {
  try {
    await deleteDoc(doc(db, "jobs", id));
  } catch (e) {
    console.log(e.message);
  }
};

export const updateInterview = async (id, data) => {
  const interviewDate = Timestamp.fromDate(new Date(data));
  const jobRef = doc(db, "jobs", id);
  try {
    await updateDoc(jobRef, { interview: interviewDate });
  } catch (e) {
    console.log(e.message);
  }
  return interviewDate;
};

export const deleteInterview = async (id) => {
  const jobRef = doc(db, "jobs", id);
  await updateDoc(jobRef, { interview: deleteField() });
  return "";
};
