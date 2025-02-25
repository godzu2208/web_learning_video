const express = require("express");
const Progress = require("../models/Progress");
const router = express.Router();

// 🟢 [POST] Cập nhật tiến trình học
router.post("/update", async (req, res) => {
    try {
        const { user_id, lesson_id, progress } = req.body;

        // Kiểm tra xem đã có tiến trình học chưa
        let progressRecord = await Progress.findOne({ where: { user_id, lesson_id } });

        if (progressRecord) {
            // Cập nhật tiến trình học
            progressRecord.progress = progress;
            if (progress >= 100) progressRecord.completed = true; // Nếu hoàn thành 100% thì đánh dấu là đã xong
            await progressRecord.save();
        } else {
            // Tạo mới nếu chưa có
            progressRecord = await Progress.create({ user_id, lesson_id, progress, completed: progress >= 100 });
        }

        res.json({ message: "Cập nhật tiến trình thành công", progress: progressRecord });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 🟢 [GET] Lấy tiến trình học của một user
router.get("/:user_id", async (req, res) => {
    try {
        const { user_id } = req.params;
        const progressRecords = await Progress.findAll({ where: { user_id } });

        res.json(progressRecords);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
