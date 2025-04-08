// import axiosInstance from "@/lib/api/axios";
import axiosInstance from "./axios";
// ... trong handleSubmit
// const response = await axiosInstance.post("/register", {
//   username: formData.username,
//   email: formData.email,
//   password: formData.password,
// });

import axiosInstance from "./axios";

// Hàm đăng ký
export const register = async (userData) => {
  try {
    const response = await axiosInstance.post("/register", userData);
    return response;
  } catch (error) {
    throw error;
  }
};

// Hàm lấy thông tin khóa học
export const getCourseById = async (courseId) => {
  try {
    const response = await axiosInstance.get(`/courses/${courseId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

// Các hàm API khác có thể thêm ở đây
