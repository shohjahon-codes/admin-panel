import axios from "axios";
import Cookies from "js-cookie";

export const saveAccessTokenToCookie = (accessToken: string) => {
  Cookies.set("accessToken", accessToken, { expires: 7 }); 
};

export const request = axios.create({
  baseURL: "http://localhost:8000",
});

request.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken"); 
      config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
