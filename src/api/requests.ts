import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";
import axios from "axios";
import { TokenUtils } from "@/utils/token-utils";

interface CustomAxiosInstance extends AxiosInstance {
  getUri(config?: AxiosRequestConfig): string;
  request<T>(config: AxiosRequestConfig): Promise<T>;
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  head<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  options<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
  patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T>;
}

const headers = {
  json: { "content-type": "application/json" },
  multipart: { "content-type": "multipart/form-data" },
  formUrlEncoded: { "content-type": "application/x-www-form-urlencoded" },
} as const;

const request: CustomAxiosInstance = axios.create({
  withCredentials: true,
  timeout: 1000000,
  headers: headers.json,
});

const handleOnSignOut = () => {
  TokenUtils.removeAllToken();
  window.location.href = "/";
  return Promise.resolve();
};

request.interceptors.request.use(async (req) => {
  const accessToken = (await TokenUtils.getToken()).token;
  if (req && req.headers && accessToken)
    (req.headers as AxiosRequestHeaders)["Authorization"] = "Bearer ".concat(
      accessToken.toString(),
    );
  return req;
});

request.interceptors.response.use(
  (response) => {
    if (response.config.url === process.env.NEXT_PUBLIC_HOST_SIGN_OUT_API) {
      handleOnSignOut();
    }

    return response.data;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (
      status === 401 ||
      config.url === process.env.NEXT_PUBLIC_HOST_SIGN_OUT_API
    ) {
      //TODO: 추후 리프레시 로직 구현
      handleOnSignOut();
    }

    return Promise.reject(error.response.data || error);
  },
);

export default request;

export const api = {
  get: <T>(url: string, params?: object) => request.get<T>(url, { ...params }),
  post: <T>(url: string, data?: unknown) => request.post<T>(url, data),
  patch: <T>(url: string, data: unknown) => request.patch<T>(url, data),
  put: <T>(url: string, data: unknown) => request.put<T>(url, data),
  delete: <T>(url: string, params?: object) =>
    request.delete<T>(url, { ...params }),
  postFile: <T>(url: string, data: unknown) =>
    request.post<T>(url, data, {
      headers: headers.multipart,
    }),
  postFormUrl: <T>(url: string, data: unknown) =>
    request.post<T>(url, data, {
      headers: headers.formUrlEncoded,
    }),
  putFile: <T>(url: string, data: unknown) =>
    request.put<T>(url, data, {
      headers: headers.multipart,
    }),
  patchFile: <T>(url: string, data: unknown) =>
    request.patch<T>(url, data, {
      headers: headers.multipart,
    }),
};
