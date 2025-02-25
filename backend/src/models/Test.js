const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Course = require('./Course');
const Lesson = require('./Lesson');

const Test = sequelize.define('Test', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    type: {
        type: DataTypes.ENUM('small', 'big'), // 'small' = bài test nhỏ (sau mỗi bài học), 'big' = bài test lớn (sau mỗi phần)
        allowNull: false
    },
    courseId: { type: DataTypes.INTEGER, references: { model: Course, key: 'id' }, allowNull: false },
    lessonId: { type: DataTypes.INTEGER, references: { model: Lesson, key: 'id' }, allowNull: true } // Chỉ có nếu là test nhỏ
});

// Quan hệ: Mỗi khóa học có nhiều bài kiểm tra, mỗi bài học có 1 bài kiểm tra nhỏ
Course.hasMany(Test, { foreignKey: 'courseId' });
Test.belongsTo(Course, { foreignKey: 'courseId' });

Lesson.hasOne(Test, { foreignKey: 'lessonId' });
Test.belongsTo(Lesson, { foreignKey: 'lessonId' });

module.exports = Test;
