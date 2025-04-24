import { getAuthInfoCookie, removeAuthInfoCookie } from "@/utils/token-utils";
import axios, { AxiosRequestHeaders } from "axios";

const headers = {
  json: { "content-type": "application/json" },
  multipart: { "content-type": "multipart/form-data" },
} as const;

const request = axios.create({
  withCredentials: true,
  timeout: 1000000,
  headers: headers.json,
});

request.interceptors.request.use(async (req) => {
  const { token } = await getAuthInfoCookie();
  if (req && req.headers && token)
    (req.headers as AxiosRequestHeaders)["Authorization"] = "Bearer ".concat(
      token.toString(),
    );
  return req;
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const {
      response: { status },
    } = error;

    if (status === 401) {
      removeAuthInfoCookie();
    }

    return Promise.reject(error.response.data || error);
  },
);

export default request;
