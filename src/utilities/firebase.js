import { collection, getDocs, orderBy } from "firebase/firestore";
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
