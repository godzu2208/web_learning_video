// const express = require('express');
// const router = express.Router();

// // Định nghĩa các route
// router.get('/', (req, res) => {
//     res.json({ message: 'User routes working' });
// });

// module.exports = router;
const express = require('express');
const { register, login, getProfile } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);

module.exports = router;
