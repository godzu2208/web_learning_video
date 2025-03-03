// // lib/api/axios.js
// import axios from 'axios';
// import { getToken } from '@/utils/storage';

// const axiosInstance = axios.create({
//     baseURL: process.env.REACT_APP_API_URL,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// // Add a request interceptor
// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = getToken();
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// // Add a response interceptor
// axiosInstance.interceptors.response.use(
//     (response) => response.data,
//     (error) => {
//         if (error.response?.status === 401) {
//             // Handle unauthorized error
//         }
//         return Promise.reject(error);
//     }
// );

// export default axiosInstance;

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosInstance;