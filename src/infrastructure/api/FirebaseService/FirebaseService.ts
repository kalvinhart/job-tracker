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
import { db } from "./firebase.config";
import { v4 as uuid } from "uuid";
import { Job } from "../../../domain/entities/job";
import { IJobService } from "../../interfaces/IJobService";

export default class FirebaseService implements IJobService {
  async getJobs(uid: string): Promise<Job[]> {
    let jobsArray: Job[] = [];

    const q = query(collection(db, "jobs"), where("user", "==", uid));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const newData = { id: doc.id, ...doc.data() };
      jobsArray.push(newData as Job);
    });

    return jobsArray;
  }

  async getJob(id: string): Promise<Job | boolean> {
    const docRef = doc(db, "jobs", id);

    const result = await getDoc(docRef);

    if (result.exists()) {
      return result.data() as Job;
    } else {
      return false;
    }
  }

  async createJob(data: Job): Promise<Job> {
    const id = uuid();
    const newData: Job = {
      ...data,
      id,
      date: new Date(data.date).getTime(),
      status: "Pending",
    };

    await setDoc(doc(db, "jobs", id), newData);

    return newData;
  }

  async updateJob(data: Job): Promise<Job> {
    const newData = {
      ...data,
      date: new Date(data.date).getTime(),
    };

    const docRef = doc(db, "jobs", newData.id!);

    await updateDoc(docRef, newData);

    return newData;
  }

  async deleteJob(id: string): Promise<void> {
    await deleteDoc(doc(db, "jobs", id));
  }

  async deleteInterview(id: string): Promise<string> {
    const jobRef = doc(db, "jobs", id);
    await updateDoc(jobRef, { interview: deleteField(), status: "Pending" });
    return "";
  }
}
