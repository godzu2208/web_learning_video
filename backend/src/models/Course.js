// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Course = sequelize.define('Course', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     title: { type: DataTypes.STRING, allowNull: false },
//     description: { type: DataTypes.TEXT, allowNull: true }
// });

// module.exports = Course;

// Update
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Course = sequelize.define(
    "Course",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: true },
        cover_image: { type: DataTypes.STRING, allowNull: true },
        category: { type: DataTypes.STRING, allowNull: true },
        price: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0 },
    },
    {
        timestamps: true,
    }
);

module.exports = Course;
