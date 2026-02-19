import axios, { type AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  timeout: 10000,
});

export const callApi = async <T>(url: string, config?: AxiosRequestConfig) => {
  try {
    const response = await axiosInstance.request<T>({ url, ...config });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.message);
    } else {
      console.error("Unexpected Error:", error);
    }
    throw error;
  }
};
