const express = require("express");
const { createLesson, getLessonsByCourse } = require("../controllers/lessonController");

const router = express.Router();

router.post("/", createLesson); // Thêm bài học mới
router.get("/:courseId", getLessonsByCourse); // Lấy danh sách bài học theo khóa học

module.exports = router;
