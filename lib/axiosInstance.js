import axios from "axios";
import { getFromLocalStorage, saveToLocalStorage } from "./LocalStorageHandler";
import { toast } from "react-toastify";


const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getFromLocalStorage("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (
      response?.data?.success === false &&
      response?.data?.message &&
      response?.data?.showNotification === true
    ) {
      toast.error(response?.data?.message);
    } else if (
      response?.data?.success === true &&
      response?.data?.message &&
      response?.data?.showNotification === true
    ) {
      toast.success(response?.data?.message);
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    // Prevent infinite loops.
    if (
      error.response.status === 401 &&
      originalRequest.url === "/api/v1/auth/refresh"
    ) {
      window.location.href = "/authentication/login";
      return Promise.reject(error);
    }

    // Access token may be expired, try to get a new one and retry the request.
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getFromLocalStorage("refreshToken");
      return axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/auth/refresh`, {
          refreshToken: refreshToken,
        })
        .then((res) => {
          saveToLocalStorage("accessToken", res.data.data.accessToken);
          saveToLocalStorage("refreshToken", res.data.data.refreshToken);
          axiosInstance.defaults.headers.common["Authorization"] =
            "Bearer " + res.data.data.accessToken;
          return axiosInstance(originalRequest);
        })
        .catch((err) => {
          window.location.href = "/authentication/login";
        });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
