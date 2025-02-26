const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

/**
 * @desc    Đăng ký user mới
 * @route   POST /api/users/register
 */
exports.register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // Kiểm tra email đã tồn tại chưa
        const existingUser = await User.findOne({
            where: { email }
        });
        if (existingUser)
            return res.status(400).json({ message: "Email đã tồn tại!" });

        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Tạo user mới
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            role
        });

        res.status(201).json({ message: "Đăng ký thành công!", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server!", error: error.message });
    }
};

/**
 * @desc    Đăng nhập user
 * @route   POST /api/users/login
 */
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Tìm user theo email
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(400).json({ message: "Email hoặc mật khẩu không đúng!" });

        // Kiểm tra mật khẩu
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Email hoặc mật khẩu không đúng!" });

        // Tạo JWT token
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRES_IN
        });

        res.status(200).json({ message: "Đăng nhập thành công!", token, user });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server!", error: error.message });
    }
};

/**
 * @desc    Lấy thông tin user
 * @route   GET /api/users/profile
 */
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, { attributes: { exclude: ['password'] } });
        if (!user) return res.status(404).json({ message: "User không tồn tại!" });

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server!", error: error.message });
    }
};
