<div className="auth-container">
            <div className="auth-form">
                <div className="auth-header">
                    <h2>Đăng ký</h2>
                </div>

                {errors.submit && (
                    <div className="error-message">{errors.submit}</div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Tên người dùng</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="form-control"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Nhập tên người dùng"
                        />
                        {errors.username && (
                            <div className="error-message">{errors.username}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Nhập email"
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

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="form-control"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Nhập lại mật khẩu"
                        />
                        {errors.confirmPassword && (
                            <div className="error-message">{errors.confirmPassword}</div>
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
                            'Đăng ký'
                        )}
                    </button>
                </form>

                <div className="auth-links">
                    <Link to="/login">Đã có tài khoản? Đăng nhập</Link>
                </div>
            </div>
        </div>