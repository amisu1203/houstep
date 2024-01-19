import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  // todo: 시간 상수로 변경하기
  timeout: 6000,
});
export default axiosInstance;
