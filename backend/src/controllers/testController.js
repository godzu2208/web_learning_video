// const { Test, Question } = require('../models');

// // Tạo bài kiểm tra mới
// exports.createTest = async (req, res) => {
//     try {
//         const { title, type, courseId, lessonId, questions } = req.body;
//         const test = await Test.create({ title, type, courseId, lessonId });

//         if (questions && questions.length > 0) {
//             const questionData = questions.map(q => ({
//                 test_id: test.id,
//                 question_id: q.question_id,
//                 type: q.type,
//                 option_a: q.option_a,
//                 option_b: q.option_b,
//                 option_c: q.option_c,
//                 option_d: q.option_d,
//                 correct_option: q.correct_option
//             }));
//             await Question.bulkCreate(questionData);
//         }

//         res.status(201).json({ message: 'Bài kiểm tra được tạo thành công!', test });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Lấy bài kiểm tra theo ID
// exports.getTestById = async (req, res) => {
//     try {
//         const test = await Test.findByPk(req.params.id, {
//             include: [{ model: Question }]
//         });

//         if (!test) return res.status(404).json({ message: 'Bài kiểm tra không tồn tại!' });

//         res.json(test);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Cập nhật bài kiểm tra
// exports.updateTest = async (req, res) => {
//     try {
//         const { title, type, courseId, lessonId, questions } = req.body;
//         const test = await Test.findByPk(req.params.id);

//         if (!test) return res.status(404).json({ message: 'Bài kiểm tra không tồn tại!' });

//         await test.update({ title, type, courseId, lessonId });

//         if (questions && questions.length > 0) {
//             await Question.destroy({ where: { test_id: test.id } });
//             const questionData = questions.map(q => ({
//                 test_id: test.id,
//                 question_id: q.question_id,
//                 type: q.type,
//                 option_a: q.option_a,
//                 option_b: q.option_b,
//                 option_c: q.option_c,
//                 option_d: q.option_d,
//                 correct_option: q.correct_option
//             }));
//             await Question.bulkCreate(questionData);
//         }

//         res.json({ message: 'Bài kiểm tra đã được cập nhật!', test });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Xóa bài kiểm tra
// exports.deleteTest = async (req, res) => {
//     try {
//         const test = await Test.findByPk(req.params.id);
//         if (!test) return res.status(404).json({ message: 'Bài kiểm tra không tồn tại!' });

//         await Question.destroy({ where: { test_id: test.id } });
//         await test.destroy();

//         res.json({ message: 'Bài kiểm tra đã được xóa!' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Lấy danh sách tất cả bài kiểm tra
// exports.getAllTests = async (req, res) => {
//     try {
//         const tests = await Test.findAll({
//             include: [{ model: Question }]
//         });
//         res.json(tests);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
/**---- Update ---- */
// const Test = require('../models/Test');
// const Question = require('../models/Question');

// const createTest = async (req, res) => {
//     try {
//         const { title, type, courseId, lessonId, questions } = req.body;
//         const test = await Test.create({ title, type, courseId, lessonId });

//         if (questions && questions.length > 0) {
//             const questionData = questions.map(q => ({
//                 test_id: test.id,
//                 // question_id: q.question_id || null,
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

//         res.status(201).json({ message: 'Bài kiểm tra được tạo thành công!', test });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// const getTestById = async (req, res) => {
//     try {
//         const test = await Test.findByPk(req.params.id, {
//             include: [{ model: Question }]
//         });

//         if (!test) return res.status(404).json({ message: 'Bài kiểm tra không tồn tại!' });

//         res.json(test);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// const updateTest = async (req, res) => {
//     try {
//         const { title, type, courseId, lessonId, questions } = req.body;
//         const test = await Test.findByPk(req.params.id);

//         if (!test) return res.status(404).json({ message: 'Bài kiểm tra không tồn tại!' });

//         await test.update({ title, type, courseId, lessonId });

//         if (questions && questions.length > 0) {
//             await Question.destroy({ where: { test_id: test.id } });
//             const questionData = questions.map(q => ({
//                 test_id: test.id,
//                 question_id: q.question_id || null,
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

//         res.json({ message: 'Bài kiểm tra đã được cập nhật!', test });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// const deleteTest = async (req, res) => {
//     try {
//         const test = await Test.findByPk(req.params.id);
//         if (!test) return res.status(404).json({ message: 'Bài kiểm tra không tồn tại!' });

//         await Question.destroy({ where: { test_id: test.id } });
//         await test.destroy();

//         res.json({ message: 'Bài kiểm tra đã được xóa!' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// const getAllTests = async (req, res) => {
//     try {
//         const tests = await Test.findAll({
//             include: [{ model: Question }]
//         });
//         res.json(tests);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// module.exports = {
//     createTest,
//     getTestById,
//     updateTest,
//     deleteTest,
//     getAllTests
// };
//**----- Update 2 ------ */
const { Test } = require('../models');

exports.createTest = async (req, res) => {
    try {
        const { title, type, courseId, lessonId } = req.body;
        const test = await Test.create({ title, type, courseId, lessonId });
        res.status(201).json({ message: 'Bài kiểm tra được tạo thành công!', test });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllTests = async (req, res) => {
    try {
        const tests = await Test.findAll({
            attributes: ['id', 'title', 'type', 'courseId', 'lessonId']
        });
        res.status(200).json(tests);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};
exports.updateTest = async (req, res) => {
    try {
        const { title, type, courseId, lessonId } = req.body;
        const test = await Test.findByPk(req.params.id);
        if (!test) return res.status(404).json({ message: 'Bài kiểm tra không tồn tại!' });
        await test.update({ title, type, courseId, lessonId });
        res.json({ message: 'Bài kiểm tra đã được cập nhật!', test });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTest = async (req, res) => {
    try {
        const test = await Test.findByPk(req.params.id);
        if (!test) return res.status(404).json({ message: 'Bài kiểm tra không tồn tại!' });
        await test.destroy();
        res.json({ message: 'Bài kiểm tra đã được xóa!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// exports.getAllTests = async (req, res) => {
//     try {
//         const tests = await Test.findAll();
//         res.json(tests);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
exports.getTestById = async (req, res) => {
    try {
        const test = await Test.findByPk(req.params.id);
        if (!test) return res.status(404).json({ message: 'Bài kiểm tra không tồn tại!' });
        res.json(test);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
