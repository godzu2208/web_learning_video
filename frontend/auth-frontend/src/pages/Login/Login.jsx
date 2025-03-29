import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/styles/auth.css';
import axiosInstance from '../Register/axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

const urlBackendrUsers = `${window.location.protocol}//${window.location.hostname}:5000/api/users`

// const localIP = ip.address();
// const urlBackendrUsers = `http://${localIP}:5000/api/users`

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email là bắt buộc';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        }
        if (!formData.password) {
            newErrors.password = 'Mật khẩu là bắt buộc';
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            setLoading(true);
            const response = await axiosInstance.post(`${urlBackendrUsers}/login`,
                {
                    email: formData.email,
                    password: formData.password
                    
                }
            );
            console.log('Login response:', response.data); 
            toast.success("Đăng nhập thành công !")
            setTimeout(()=> navigate('/dashboard'), 3000);
        } catch (error) {
            setErrors({
                submit: error.message || 'Đăng nhập thất bại'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer/>
            <div className="auth-container">
                <div className="auth-form">
                    <div className="auth-header">
                        <h2>Đăng nhập</h2>
                    </div>

                    {errors.submit && (
                        <div className="error-message">{errors.submit}</div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Nhập email của bạn"
                            />
                            {errors.email && (
                                <div className="error-message">{errors.email}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Mật khẩu</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Nhập mật khẩu"
                            />
                            {errors.password && (
                                <div className="error-message">{errors.password}</div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="spinner"></span>
                            ) : (
                                'Đăng nhập'
                            )}
                        </button>
                    </form>

                    <div className="auth-links">
                        <Link to="/register">Chưa có tài khoản? Đăng ký</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;