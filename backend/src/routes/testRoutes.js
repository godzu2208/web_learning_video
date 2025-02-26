// const express = require("express");
// const Test = require("../models/Test");
// const Question = require("../models/Question");
// const router = express.Router();

// // 🟢 [POST] Tạo bài kiểm tra mới
// router.post("/create", async (req, res) => {
//     try {
//         const { course_id, title, description, total_questions, duration } = req.body;
//         const newTest = await Test.create({ course_id, title, description, total_questions, duration });

//         res.json({ message: "Tạo bài kiểm tra thành công!", test: newTest });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // 🟢 [POST] Thêm câu hỏi vào bài kiểm tra
// router.post("/add-question", async (req, res) => {
//     try {
//         const { test_id, question_text, option_a, option_b, option_c, option_d, correct_option } = req.body;

//         const newQuestion = await Question.create({
//             test_id,
//             question_text,
//             option_a,
//             option_b,
//             option_c,
//             option_d,
//             correct_option,
//         });

//         res.json({ message: "Thêm câu hỏi thành công!", question: newQuestion });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // 🟢 [GET] Lấy danh sách bài kiểm tra của khóa học
// router.get("/course/:course_id", async (req, res) => {
//     try {
//         const { course_id } = req.params;
//         const tests = await Test.findAll({ where: { course_id } });

//         res.json(tests);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // 🟢 [GET] Lấy danh sách câu hỏi của một bài kiểm tra
// router.get("/:test_id/questions", async (req, res) => {
//     try {
//         const { test_id } = req.params;
//         const questions = await Question.findAll({ where: { test_id } });

//         res.json(questions);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// module.exports = router;

/*----- Update ------- */
const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

router.post('/create', testController.createTest);
router.get('/:id', testController.getTestById);
router.put('/update/:id', testController.updateTest);
router.delete('/delete/:id', testController.deleteTest);
router.get('/all', testController.getAllTests);

module.exports = router;
