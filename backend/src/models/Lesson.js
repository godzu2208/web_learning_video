const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Course = require('./Course');

const Lesson = sequelize.define('Lesson', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    video_url: { type: DataTypes.STRING, allowNull: false },
    courseId: { type: DataTypes.INTEGER, references: { model: Course, key: 'id' } }
});

Course.hasMany(Lesson, { foreignKey: 'courseId' });
Lesson.belongsTo(Course, { foreignKey: 'courseId' });

module.exports = Lesson;
