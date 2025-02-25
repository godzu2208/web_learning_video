const express = require('express');
const router = express.Router();

// Định nghĩa các route
router.get('/', (req, res) => {
    res.json({ message: 'Course routes working' });
});

module.exports = router;