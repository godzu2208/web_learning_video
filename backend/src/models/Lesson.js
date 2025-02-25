// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const Course = require('./Course');

// const Lesson = sequelize.define('Lesson', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     title: { type: DataTypes.STRING, allowNull: false },
//     video_url: { type: DataTypes.STRING, allowNull: false },
//     courseId: { type: DataTypes.INTEGER, references: { model: Course, key: 'id' } }
// });

// Course.hasMany(Lesson, { foreignKey: 'courseId' });
// Lesson.belongsTo(Course, { foreignKey: 'courseId' });

// module.exports = Lesson;

// Update
// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/database");
// const Course = require("./Course");

// const Lesson = sequelize.define(
//     "Lesson",
//     {
//         id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//         title: { type: DataTypes.STRING, allowNull: false },
//         video_url: { type: DataTypes.STRING, allowNull: false },
//         duration: { type: DataTypes.INTEGER, allowNull: false },
//         order: { type: DataTypes.INTEGER, allowNull: false },
//     },
//     {
//         timestamps: true,
//     }
// );

// // Mỗi bài học thuộc về một khóa học
// Lesson.belongsTo(Course, { foreignKey: "course_id" });
// Course.hasMany(Lesson, { foreignKey: "course_id" });

// module.exports = Lesson;

/*-------- Update 2 ------*/
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Course = require("./Course");

const Lesson = sequelize.define(
    "Lesson",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: { type: DataTypes.STRING, allowNull: false },
        video_url: { type: DataTypes.STRING, allowNull: false },
        duration: { type: DataTypes.INTEGER, allowNull: false },
        order: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: Course, key: "id" }

        },
    },
    {
        timestamps: true,
    }
);

// Mỗi bài học thuộc về một khóa học
Lesson.belongsTo(Course, { foreignKey: "course_id", onDelete: "CASCADE" });
Course.hasMany(Lesson, { foreignKey: "course_id", onDelete: "CASCADE" });

module.exports = Lesson;
