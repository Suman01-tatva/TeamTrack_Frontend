import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import Cookie from "js-cookie";

const api = axios.create({
  baseURL: import.meta.env.API_URL || "http://localhost:5254/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = Cookie.get("token");
    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const data = error.response.data;
      const message =
        typeof data === "object" && data !== null && "message" in data
          ? (data as { message?: string }).message
          : undefined;
      return Promise.reject(
        new Error(`Error: ${message || error.response.statusText}`)
      );
    } else if (error.request) {
      return Promise.reject(
        new Error("Network Error: Unable to reach the server.")
      );
    } else {
      return Promise.reject(new Error(`Unexpected Error: ${error.message}`));
    }
  }
);

export const get = async <T>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<T> => {
  const mergedConfig: AxiosRequestConfig = {
    ...config,
    ...(data ? { params: data } : {}),
  };
  const response: AxiosResponse<T> = await api.get(url, mergedConfig);
  return response.data;
};

export const post = async <T>(
  url: string,
  data: object,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse<T> = await api.post(url, data, config);
  return response.data;
};

export const put = async <T>(
  url: string,
  data: object,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse<T> = await api.put(url, data, config);
  return response.data;
};

export const del = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse<T> = await api.delete(url, config);
  return response.data;
};

export default {
  get,
  post,
  put,
  del,
};
