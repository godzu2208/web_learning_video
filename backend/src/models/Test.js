// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const Course = require('./Course');
// const Lesson = require('./Lesson');

// const Test = sequelize.define('Test', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     title: { type: DataTypes.STRING, allowNull: false },
//     type: {
//         type: DataTypes.ENUM('small', 'big'), // 'small' = bài test nhỏ (sau mỗi bài học), 'big' = bài test lớn (sau mỗi phần)
//         allowNull: false
//     },
//     courseId: { type: DataTypes.INTEGER, references: { model: Course, key: 'id' }, allowNull: false },
//     lessonId: { type: DataTypes.INTEGER, references: { model: Lesson, key: 'id' }, allowNull: true } // Chỉ có nếu là test nhỏ
// });

// // Quan hệ: Mỗi khóa học có nhiều bài kiểm tra, mỗi bài học có 1 bài kiểm tra nhỏ
// Course.hasMany(Test, { foreignKey: 'courseId' });
// Test.belongsTo(Course, { foreignKey: 'courseId' });

// Lesson.hasOne(Test, { foreignKey: 'lessonId' });
// Test.belongsTo(Lesson, { foreignKey: 'lessonId' });

// module.exports = Test;

/*----------Update--------------*/
// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/database");
// const Course = require("./Course");

// const Test = sequelize.define(
//     "Test",
//     {
//         id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//         course_id: { type: DataTypes.INTEGER, allowNull: false },
//         title: { type: DataTypes.STRING, allowNull: false }, // Tên bài kiểm tra
//         description: { type: DataTypes.TEXT, allowNull: true },
//         total_questions: { type: DataTypes.INTEGER, allowNull: false }, // Tổng số câu hỏi
//         duration: { type: DataTypes.INTEGER, allowNull: false }, // Thời gian làm bài (phút)
//     },
//     {
//         timestamps: true,
//     }
// );

// // Khóa ngoại: Một khóa học có nhiều bài kiểm tra
// Test.belongsTo(Course, { foreignKey: "course_id" });
// Course.hasMany(Test, { foreignKey: "course_id" });

// module.exports = Test;
/*----------Update 2--------------*/
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// const Test = sequelize.define('Test', {
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     type: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     courseId: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     lessonId: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     }
// });
const Test = sequelize.define('Test', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    lessonId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'tests' // Đảm bảo Sequelize hiểu đúng tên bảng
});

Test.associate = (models) => {
    Test.hasMany(models.Question, { foreignKey: 'test_id', onDelete: 'CASCADE' });
};

module.exports = Test;