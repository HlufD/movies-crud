import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

const instance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export default instance;

export const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    return error.response?.data || error.message;
  }
  return "An unknown error occurred";
};
