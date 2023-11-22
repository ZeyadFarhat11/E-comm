import axios from "axios";
import { userTokenKey, userKey } from "./auth";

const http = axios.create({ baseURL: "http://127.0.0.1:8000/api" });
window.http = http;

http.interceptors.request.use(
  function (config) {
    if (config.sendToken) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        userTokenKey
      )}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    if (error.response?.data?.code === "token_not_valid") {
      localStorage.removeItem(userTokenKey);
      localStorage.removeItem(userKey);
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default http;
