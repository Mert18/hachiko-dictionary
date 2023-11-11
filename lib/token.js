import jwt_decode from "jwt-decode";
import { removeFromLocalStorage } from "./LocalStorageHandler";

export const isTokenValid = (token) => {
  if (token) {
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000; // Convert to seconds

    if (decodedToken.exp > currentTime) {
      return true;
    }
  }
  removeFromLocalStorage("accessToken");
  removeFromLocalStorage("refreshToken");
  return false;
};
