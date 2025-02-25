const Course = require("../models/Course");

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json({ courses });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (!course) return res.status(404).json({ message: "Không tìm thấy khóa học!" });
        res.json({ course });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json({ message: "Khóa học đã tạo!", course });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCourse = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (!course) return res.status(404).json({ message: "Không tìm thấy khóa học!" });

        await course.update(req.body);
        res.json({ message: "Cập nhật khóa học thành công!", course });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (!course) return res.status(404).json({ message: "Không tìm thấy khóa học!" });

        await course.destroy();
        res.json({ message: "Xóa khóa học thành công!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
