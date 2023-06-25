import axios from "axios";
import jwt_decode from "jwt-decode";

export const saveToStorage = (key, value) => {
  if (typeof window !== "undefined") {
    return window.localStorage.setItem(key, value);
  }
};

export const getFromStorage = (key) => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(key);
  }
};

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URI,
  timeout: 5000,
  headers: {
    Authorization: getFromStorage("accessToken")
      ? "Bearer " + getFromStorage("accessToken")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0"
  }
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    // Prevent infinite loops
    if (error.response.status === 401) {
      console.log("Received 401!", error.response);
      if (originalRequest.url === "/api/v1/auth/refresh") {
        console.log("Request was made to refresh token. Redirecting to login.");
        window.location.href = "/authentication/login";
        return Promise.reject(error);
      } else {
        console.log("Request was not made to refresh token. Refreshing token.");
        const accessToken = getFromStorage("accessToken");
        if (accessToken) {
          const tokenParts = jwt_decode(accessToken);
          // exp date in token is expressed in seconds, while now() returns milliseconds:
          const now = Math.ceil(Date.now() / 1000);
          if (tokenParts.exp < now) {
            console.log("Access token expired. Refreshing token.");
            return axios
              .post(
                `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/auth/refresh`,
                { refreshToken: getFromStorage("refreshToken") }
              )
              .then((response) => {
                console.log("Refresh request response: ", response);
                saveToStorage("accessToken", response.data.data.accessToken);
                saveToStorage("refreshToken", response.data.data.refreshToken);

                axiosInstance.defaults.headers["Authorization"] =
                  "Bearer " + response.data.data.accessToken;
                originalRequest.headers["Authorization"] =
                  "Bearer " + response.data.data.accessToken;

                return axiosInstance(originalRequest);
              })
              .catch((err) => {
                console.log("Error handling the requests: + ", err);
              });
          }
        }
      }
    }

    if (error.response.status === 403) {
      console.log("Received 403!", error.response);
      const refreshToken = getFromStorage("refreshToken");
      if (refreshToken) {
        const tokenParts = jwt_decode(refreshToken);
        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);
        if (tokenParts.exp > now) {
          console.log("Refresh token is valid. Refreshing token.");
          return axios
            .post(
              `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/auth/refresh`,
              { refreshToken: refreshToken }
            )
            .then((response) => {
              saveToStorage("accessToken", response.data.data.accessToken);
              saveToStorage("refreshToken", response.data.data.refreshToken);

              axiosInstance.defaults.headers["Authorization"] =
                "Bearer " + response.data.data.accessToken;
              originalRequest.headers["Authorization"] =
                "Bearer " + response.data.data.accessToken;
              
              console.log("Refreshed the token succesffully.");
              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              console.log("Error refreshing token: ", err);
            });
        } else {
          window.location.href = "/authentication/login ";
        }
      } else {
        window.location.href = "/authentication/login ";
      }
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export default axiosInstance;
