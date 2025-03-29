import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/styles/auth.css';
import axiosInstance from '../Register/axios';

const Login1 = () => {
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
            // Gọi API login với đường dẫn đầy đủ
            const response = await axiosInstance.post('http://localhost:5000/api/users/login', {
                email: formData.email,
                password: formData.password
            });
            alert("Đăng nhập thành công!!!")
            console.log(formData.email)
            console.log(formData.password)
            console.log(response)
            console.log('Login data:', formData);
            // Sau khi login thành công
            navigate('/dashboard');
        } catch (error) {
            setErrors({
                submit: error.message || 'Đăng nhập thất bại'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <div className="auth-header">
                    <h4>Đăng nhập Hexagon Elearning </h4>
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
    );
};

export default Login1;