import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

// Create axios instance.
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

// Create axios interceptor
createAuthRefreshInterceptor(axiosInstance, (failedRequest) =>
  // 1. First try request fails - refresh the token.
  axiosInstance
    .post("/api/v1/refresh", {
      refreshToken: localStorage.getItem("refreshToken"),
    })
    .then((resp) => {
      // 1a. Clear old helper cookie used in 'authorize.ts' higher order function.
      const { access_token, refresh_token } = resp.data;
      // 2. Set up new access token
      const bearer = `Bearer ${access_token}`;
      axiosInstance.defaults.headers.Authorization = bearer;

      localStorage.setItem("refreshToken", refresh_token);
      localStorage.setItem("accessToken", access_token);

      // 4. Set up access token of the failed request.
      failedRequest.response.config.headers.Authorization = bearer;

      // 5. Retry the request with new setup!
      return Promise.resolve();
    })
);

export default axiosInstance;
