import axios from "axios";
import { toast } from "react-toastify";

export const login = async (values) => {
  await axios
    .post(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/auth/login`, values)
    .then((res) => {
      const { accessToken, refreshToken } = res.data.data;
      const bearer = `Bearer ${accessToken}`;
      axios.defaults.headers.Authorization = bearer;
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("accessToken", accessToken);
      toast.success(res.data.message);
      localStorage.setItem(
        "userData",
        JSON.stringify({
          accountId: res.data.data.accountId,
          email: res.data.data.email,
          username: res.data.data.username,
          role: res.data.data.role,
        })
      );
      window.location.replace("/main");
    })
    .catch((err) => {
      toast.error(err?.response?.data?.message);
      return err;
    });
};

export const register = async (values) => {
  const response = await axios
    .post(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/auth/register`, values)
    .then((res) => {
      toast.success(res.data.message);
      return data;
    })
    .catch((err) => {
      toast.error(err?.response?.data?.message);
    });

  return response;
};
