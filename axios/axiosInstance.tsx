import axios from "axios";
import { AXIOS_TIMEOUT } from "../constants/axiosInstance";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: AXIOS_TIMEOUT,
});

export default axiosInstance;
