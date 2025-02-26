/*----- Update ------- */
const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

router.post('/create', testController.createTest);
router.get('/all', testController.getAllTests);
router.get('/:id', testController.getTestById);
router.put('/update/:id', testController.updateTest);
router.delete('/delete/:id', testController.deleteTest);


module.exports = router;

// Thêm câu hỏi vào bài kiểm tra đã có
// router.post('/add-question/:testId', async (req, res) => {
//     try {
//         const { testId } = req.params;
//         const { questions } = req.body;

//         // Kiểm tra bài kiểm tra có tồn tại không
//         const test = await Test.findByPk(testId);
//         if (!test) return res.status(404).json({ message: 'Bài kiểm tra không tồn tại!' });

//         // Thêm câu hỏi vào bài kiểm tra
//         if (questions && questions.length > 0) {
//             const questionData = questions.map(q => ({
//                 test_id: test.id,
//                 question_text: q.question_text,
//                 type: q.type,
//                 option_a: q.option_a,
//                 option_b: q.option_b,
//                 option_c: q.option_c,
//                 option_d: q.option_d,
//                 correct_option: q.correct_option
//             }));
//             await Question.bulkCreate(questionData);
//         }

//         res.status(201).json({ message: 'Câu hỏi đã được thêm thành công!', test_id: testId });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

