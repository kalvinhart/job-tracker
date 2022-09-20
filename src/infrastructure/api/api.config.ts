import axios from "axios";

export const makeApiInstance = (token?: string) => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL as string,
    headers: {
      Authorization: token ?? "",
    },
  });
  return instance;
};
