// const express = require('express');
// const router = express.Router();

// // Định nghĩa các route
// router.get('/', (req, res) => {
//     res.json({ message: 'Course routes working' });
// });

// module.exports = router;

// Update
const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);
router.post("/", courseController.createCourse);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);

module.exports = router;
