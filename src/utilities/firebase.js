import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase.config";

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
  const newData = {
    ...data,
    date: Timestamp.fromDate(new Date(data.date)),
    status: "Pending",
  };

  try {
    const docRef = await addDoc(collection(db, "jobs"), newData);
  } catch (e) {
    console.log(e.message);
  }

  return newData;
};

export const saveUpdate = async (data) => {
  const newData = {
    ...data,
    date: Timestamp.fromDate(new Date(data.date)),
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
