const { Test, Question } = require('../models');

exports.addQuestionToTest = async (req, res) => {
    try {
        const { questions } = req.body;
        const testId = req.params.testId;

        // Kiểm tra dữ liệu đầu vào
        if (!questions || !Array.isArray(questions) || questions.length === 0) {
            return res.status(400).json({ error: "Dữ liệu câu hỏi không hợp lệ!" });
        }

        // Kiểm tra test_id có tồn tại không
        const testExists = await Test.findByPk(testId);
        if (!testExists) {
            return res.status(404).json({ error: `Test ID ${testId} không tồn tại!` });
        }

        // Gán test_id cho mỗi câu hỏi
        const formattedQuestions = questions.map(q => ({
            ...q,
            test_id: testId
        }));

        // Chèn dữ liệu vào DB
        const createdQuestions = await Question.bulkCreate(formattedQuestions);

        return res.status(201).json({
            message: "Câu hỏi đã được thêm thành công!",
            test_id: testId,
            questions: createdQuestions
        });

    } catch (error) {
        console.error("Lỗi server:", error);
        return res.status(500).json({ error: "Lỗi server!" });
    }
};


exports.updateQuestion = async (req, res) => {
    try {
        const { question_text, type, option_a, option_b, option_c, option_d, correct_option } = req.body;
        const question = await Question.findByPk(req.params.id);
        if (!question) return res.status(404).json({ message: 'Câu hỏi không tồn tại!' });
        await question.update({ question_text, type, option_a, option_b, option_c, option_d, correct_option });
        res.json({ message: 'Câu hỏi đã được cập nhật!', question });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteQuestion = async (req, res) => {
    try {
        const questionId = req.params.id;

        // Kiểm tra câu hỏi có tồn tại không và lấy thêm thông tin về test
        const question = await Question.findOne({
            where: { id: questionId },
            include: [{
                model: Test,
                attributes: ['id', 'title']
            }]
        });

        if (!question) {
            // Kiểm tra xem ID có hợp lệ không
            if (isNaN(questionId)) {
                return res.status(400).json({
                    success: false,
                    message: 'ID câu hỏi không hợp lệ',
                    error_code: 'INVALID_QUESTION_ID'
                });
            }
            return res.status(404).json({
                success: false,
                message: `Không tìm thấy câu hỏi với ID ${questionId}`,
                error_code: 'QUESTION_NOT_FOUND'
            });
        }

        // Thực hiện xóa câu hỏi
        await question.destroy();

        return res.status(200).json({
            success: true,
            message: 'Câu hỏi đã được xóa thành công',
            deletedQuestion: {
                id: questionId,
                test_id: question.test_id,
                test_title: question.Test ? question.Test.title : null
            }
        });
    } catch (error) {
        console.error("Lỗi khi xóa câu hỏi:", error);
        return res.status(500).json({
            success: false,
            message: 'Lỗi server khi xóa câu hỏi',
            error: error.message
        });
    }
};

exports.getQuestionsByTestId = async (req, res) => {
    try {
        const { testId } = req.params;

        // Kiểm tra test_id có tồn tại không
        const testExists = await Test.findByPk(testId);
        if (!testExists) {
            return res.status(404).json({ message: 'Không tồn tại Test ID này' });
        }

        // Tìm tất cả câu hỏi của test
        const questions = await Question.findAll({
            where: { test_id: testId }
        });

        if (!questions.length) {
            return res.status(404).json({ message: 'Không có câu hỏi nào trong bài test này' });
        }

        res.json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteQuestionsByTestId = async (req, res) => {
    try {
        const testId = req.params.testId;

        // Kiểm tra test có tồn tại không
        const test = await Test.findByPk(testId);
        if (!test) {
            return res.status(404).json({
                success: false,
                message: `Không tìm thấy bài test với ID ${testId}`,
                error_code: 'TEST_NOT_FOUND'
            });
        }

        // Đếm số câu hỏi trước khi xóa
        const questionCount = await Question.count({
            where: { test_id: testId }
        });

        if (questionCount === 0) {
            return res.status(404).json({
                success: false,
                message: `Không có câu hỏi nào trong bài test ${testId}`,
                error_code: 'NO_QUESTIONS_FOUND'
            });
        }

        // Xóa tất cả câu hỏi của test
        await Question.destroy({
            where: { test_id: testId }
        });

        return res.status(200).json({
            success: true,
            message: 'Đã xóa tất cả câu hỏi thành công',
            data: {
                test_id: testId,
                test_title: test.title,
                deleted_questions_count: questionCount
            }
        });

    } catch (error) {
        console.error("Lỗi khi xóa câu hỏi:", error);
        return res.status(500).json({
            success: false,
            message: 'Lỗi server khi xóa câu hỏi',
            error: error.message
        });
    }
};
