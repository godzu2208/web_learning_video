const sequelize = require('../config/database');
const User = require('./User');
const Course = require('./Course');
const Lesson = require('./Lesson');
const Test = require('./Test');
const Progress = require('./Progress');
const Question = require('./Question');

// Đồng bộ tất cả model với database
sequelize.sync({ alter: true }) // Cập nhật bảng nếu có thay đổi
    .then(() => console.log("Database & tables created!"))
    .catch(err => console.error("Error syncing database:", err));
Test.hasMany(Question, { foreignKey: 'test_id', onDelete: 'CASCADE' });
Question.belongsTo(Test, { foreignKey: 'test_id' });
module.exports = { User, Course, Lesson, Test, Progress };
