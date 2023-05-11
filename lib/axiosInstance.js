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
    Expires: "0",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("REQUEST HAS BEEN INTERCEPTED!!!!!!!!!!!!!!!!!!!");
    const originalRequest = error.config;
    // Prevent infinite loops
    if (
      error.response.status === 401 &&
      originalRequest.url === "/api/v1/auth/refresh"
    ) {
      window.location.href = "/authentication";
      return Promise.reject(error);
    }
    if (error.response.status === 403) {
      const refreshToken = getFromStorage("refreshToken");
      console.log("Refresh token received: ", refreshToken);
      if (refreshToken) {
        const tokenParts = jwt_decode(refreshToken);
        console.log("Token parts: ", tokenParts);
        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);
        if (tokenParts.exp > now) {
          console.log("Refresh token is not expired yet");
          return axios
            .post(
              `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/auth/refresh`,
              { refreshToken: refreshToken }
            )
            .then((response) => {
              console.log("RECEIVED THE REFRESH TOKEN RESPONSE");
              console.log(response);
              saveToStorage("accessToken", response.data.data.accessToken);
              saveToStorage("refreshToken", response.data.data.refreshToken);

              axiosInstance.defaults.headers["Authorization"] =
                "Bearer " + response.data.data.accessToken;
              originalRequest.headers["Authorization"] =
                "Bearer " + response.data.data.accessToken;

              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("Refresh token is expired", tokenParts.exp, now);
          window.location.href = "/authentication";
        }
      } else {
        console.log("Refresh token not available.");
        window.location.href = "/authentication";
      }
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export default axiosInstance;
