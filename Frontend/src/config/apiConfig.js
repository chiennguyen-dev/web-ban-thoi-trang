import axios from "axios";
// Đổi port 5454 thành port backend thực tế của bạn nếu khác
export const API_BASE_URL = "http://localhost:5454"; 

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

// Thêm một bộ đánh chặn (interceptor) trước khi request được gửi đi
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);