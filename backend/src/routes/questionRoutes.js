const express = require('express');
const router = express.Router();

// const testController = require('../controllers/testController');
const questionController = require('../controllers/questionController')

router.post('/:testId', questionController.addQuestionToTest);
router.put('/:id', questionController.updateQuestion);
router.delete('/:id', questionController.deleteQuestion);
router.delete('/test/:testId', questionController.deleteQuestionsByTestId);
router.get('/:testId', questionController.getQuestionsByTestId);

module.exports = router;
