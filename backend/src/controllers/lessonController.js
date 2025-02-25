const Lesson = require("../models/Lesson");

exports.createLesson = async (req, res) => {
    try {
        const { title, video_url, duration, order, course_id } = req.body;
        const lesson = await Lesson.create({ title, video_url, duration, order, course_id });
        res.status(201).json({ message: "Bài học đã tạo!", lesson });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getLessonsByCourse = async (req, res) => {
    try {
        const { course_id } = req.params;
        const lessons = await Lesson.findAll({ where: { course_id }, order: [["order", "ASC"]] });
        res.status(200).json(lessons);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
