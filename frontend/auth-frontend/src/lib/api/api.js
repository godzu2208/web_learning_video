import axiosInstance from '@/lib/api/axios';

// ... trong handleSubmit
const response = await axiosInstance.post('/register', {
    username: formData.username,
    email: formData.email,
    password: formData.password
});