// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const User = require('./User');
// const Course = require('./Course');
// const Lesson = require('./Lesson');

// const Progress = sequelize.define('Progress', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     userId: { type: DataTypes.INTEGER, references: { model: User, key: 'id' }, allowNull: false },
//     courseId: { type: DataTypes.INTEGER, references: { model: Course, key: 'id' }, allowNull: false },
//     lessonId: { type: DataTypes.INTEGER, references: { model: Lesson, key: 'id' }, allowNull: true }, // Chỉ có nếu là bài học
//     completed: { type: DataTypes.BOOLEAN, defaultValue: false }, // Đánh dấu bài học đã hoàn thành chưa
//     percentage: { type: DataTypes.FLOAT, defaultValue: 0 } // % hoàn thành khóa học
// });

// // Quan hệ
// User.hasMany(Progress, { foreignKey: 'userId' });
// Progress.belongsTo(User, { foreignKey: 'userId' });

// Course.hasMany(Progress, { foreignKey: 'courseId' });
// Progress.belongsTo(Course, { foreignKey: 'courseId' });

// Lesson.hasMany(Progress, { foreignKey: 'lessonId' });
// Progress.belongsTo(Lesson, { foreignKey: 'lessonId' });

// module.exports = Progress;
/*------ Update ------*/
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Lesson = require("./Lesson");

const Progress = sequelize.define(
    "Progress",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        lesson_id: { type: DataTypes.INTEGER, allowNull: false },
        completed: { type: DataTypes.BOOLEAN, defaultValue: false }, // Đã hoàn thành hay chưa
        progress: { type: DataTypes.FLOAT, defaultValue: 0 }, // % hoàn thành bài học
    },
    {
        timestamps: true,
    }
);

// Khóa ngoại
Progress.belongsTo(User, { foreignKey: "user_id" });
Progress.belongsTo(Lesson, { foreignKey: "lesson_id" });

module.exports = Progress;
