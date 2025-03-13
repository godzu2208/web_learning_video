// src/pages/Register/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import axiosInstance from './axios';
import logoHex from "./logo.png"


const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        // authencation fullname
        if (!formData.fullname) {
            newErrors.fullname = 'Họ và tên là bắt buộc !'
        }
        // authencation username
        if (!formData.username) {


            newErrors.username = 'Tên người dùng là bắt buộc !';
        }
        // authencation email
        if (!formData.email) {
            newErrors.email = 'Email là bắt buộc';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        } else if (!/^[a-zA-Z0-9._%+-]+@hexa\.vn$/(!formData.email)) {
            newErrors.email = 'Email của công ty @hexa.vn'
        }
        // authencation password
        if (!formData.password) {
            newErrors.password = 'Mật khẩu là bắt buộc !';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự !';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Mật khẩu không khớp !';
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
            const response = await axiosInstance.post('/api/users/register', {
                username: formData.username,
                email: formData.email,
                password: formData.password
            });
            console.log('Register data:', formData);
            console.log('Register response:', response.data); // Sử dụng response
            navigate('/login');
        } catch (error) {
            setErrors({
                submit: error.message || 'Đăng ký thất bại'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="hexa-register">
                <div className="register">
                    <div className="row">
                        <div className="logo-content">
                            <div className="logo-content-medium">
                                <a href="/" className="router-link">
                                    <img src={logoHex} className="logo-img" alt="Logo" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-register">
                            <div className="el-card">
                                <div className="el-card-body">
                                    <h1 className="card-title">
                                        Đăng ký tài khoản cho Hexagon E-Learning
                                    </h1>
                                    {errors.submit && (
                                        <div className="error-message">{errors.submit}</div>
                                    )}
                                    <p className="subtitle">
                                        Chào mừng bạn đến Nền tảng <strong>Hexagon E-Learning </strong>! Tham gia cùng chúng tôi để tìm kiếm thông tin hữu ích
                                        cần thiết để cải thiện kỹ năng của bạn. Vui lòng điền thông tin của bạn vào biểu mẫu bên
                                        dưới để tiếp tục.
                                    </p>
                                    <div className="form-register-body">
                                        <form className="el-form" onSubmit={handleSubmit}>
                                            <div className="el-form-item is-error is-required">
                                                <div className="el-form-item-content">
                                                    <div className="content-input">
                                                        <input
                                                            type="text"
                                                            className="el-input"
                                                            autoComplete='off'
                                                            placeholder='Tên của bạn'
                                                            value={formData.fullname}
                                                        />
                                                        {errors.fullname && (
                                                            <div className="error-message">{errors.fullname}</div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm">
                                                    <div className="el-form-item is-error is-required">
                                                        <div className="el-form-item-content">
                                                            <div className="content-input">
                                                                <input
                                                                    type="text"
                                                                    className="el-input"
                                                                    autoComplete='off'
                                                                    placeholder='Email. Ví dụ : linhlh@hexa.vn'
                                                                    value={formData.email}
                                                                />
                                                                {errors.email && (
                                                                    <div className="error-message">{errors.email}</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm">
                                                    <div className="el-form-item is-error is-required">
                                                        <div className="el-form-item-content">
                                                            <div className="content-input">
                                                                <input
                                                                    type="text"
                                                                    autoComplete='off'
                                                                    className="el-input"
                                                                    placeholder='Tên tài khoản'
                                                                    value={formData.username}
                                                                />
                                                                {errors.username && (
                                                                    <div className="error-message">{errors.username}</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="el-form-item is-error is-required">
                                                <div className="el-form-item-content">
                                                    <div className="content-input">
                                                        <input
                                                            type="text"
                                                            autoComplete='off'
                                                            className="el-input"
                                                            placeholder='Mật khẩu'
                                                            value={formData.password}
                                                            onChange={handleChange}
                                                        />
                                                        {errors.password && (
                                                            <div className="error-message">{errors.password}</div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="el-form-item is-error is-required">
                                                <div className="el-form-item-content">
                                                    <div className="content-input">
                                                        <input
                                                            type="text"
                                                            autoComplete='off'
                                                            className="el-input"
                                                            placeholder='Xác nhận mật khẩu của bạn'
                                                            value={formData.confirmPassword}
                                                            onChange={handleChange}
                                                        />
                                                        {errors.confirmPassword && (
                                                            <div className="error-message">{errors.confirmPassword}</div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="el-form-item">
                                                <div className="el-form-item-content">
                                                    <label className="el-checkbox">
                                                        <span className="el-checkbox-input is-checked is-focus">
                                                            <input type="checkbox" aria-hidden="false" id="" className="el-checkbox-original" />
                                                            {/* <span className="el-checkbox-inner"> </span> */}

                                                        </span>
                                                        <span className="el-checkbox-label">
                                                            <span>Tôi đồng ý </span>
                                                            <a href="/rules" className="rules" target='_blank'>
                                                                Điều khoản dịch vụ của Hexagon E-Learning
                                                            </a>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="btn">
                                        <button
                                            disabled={loading}
                                            type="submit"
                                            className="btn-register"
                                        >
                                            {
                                                loading ?
                                                    (<span className="spinner"></span>)
                                                    :
                                                    (<span>Đăng ký</span>)
                                            }

                                        </button>
                                    </div>
                                    <div className="auth-links">
                                        <Link to="/login">Đã có tài khoản? Đăng nhập</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
};

export default Register;