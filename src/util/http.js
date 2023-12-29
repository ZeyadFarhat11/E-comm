import axios from "axios";
import { userTokenKey, userKey } from "./auth";

// const http = axios.create({ baseURL: "http://127.0.0.1:8000/api" });
const http = axios.create({ baseURL: "http://192.168.172.200:8000/api" });
window.http = http;

http.interceptors.request.use(
  function (config) {
    let token = localStorage.getItem(userTokenKey);
    if (config.sendToken && token) {
      config.headers.Authorization = `Bearer ${token}`;
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
    let { redirect = true } = error.config;
    if (error.response?.data?.code === "token_not_valid") {
      localStorage.removeItem(userTokenKey);
      localStorage.removeItem(userKey);
      if (redirect) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default http;
