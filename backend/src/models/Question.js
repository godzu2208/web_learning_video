// // const { DataTypes } = require("sequelize");
// // const sequelize = require("../config/database");


// // const Question = sequelize.define(
// //     "Question",
// //     {
// //         id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
// //         test_id: { type: DataTypes.INTEGER, allowNull: false },
// //         question_text: { type: DataTypes.TEXT, allowNull: false },
// //         option_a: { type: DataTypes.STRING, allowNull: false },
// //         option_b: { type: DataTypes.STRING, allowNull: false },
// //         option_c: { type: DataTypes.STRING, allowNull: false },
// //         option_d: { type: DataTypes.STRING, allowNull: false },
// //         correct_option: { type: DataTypes.STRING, allowNull: false }, // Đáp án đúng (A, B, C, D)
// //     },
// //     {
// //         timestamps: true,
// //     }
// // );

// // // Một bài kiểm tra có nhiều câu hỏi
// // Question.belongsTo(Test, { foreignKey: "test_id" });
// // Test.hasMany(Question, { foreignKey: "test_id" });

// // module.exports = Question;

// /** ---- Update ----- */
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const Test = require("./Test");
// const Question = sequelize.define('Question', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     // test_id: {
//     //     type: DataTypes.INTEGER,
//     //     references: {
//     //         model: 'Tests',
//     //         key: 'id'
//     //     }
//     // },
//     // question_id: {
//     //     type: DataTypes.INTEGER,
//     //     allowNull: true
//     // },
//     question_text: {
//         type: DataTypes.TEXT,
//         allowNull: false
//     },
//     type: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     option_a: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     option_b: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     option_c: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     option_d: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     correct_option: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     test_id: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'Test',
//             key: 'id'
//         },
//         onDelete: 'CASCADE'
//     }
// });
// Question.belongsTo(Test, { foreignKey: 'test_id' });
// Test.hasMany(Question, { foreignKey: 'test_id', onDelete: 'CASCADE' });
// module.exports = Question;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Test = require("./Test");
const Question = sequelize.define('Question', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    question_text: { type: DataTypes.TEXT, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    option_a: { type: DataTypes.STRING, allowNull: false },
    option_b: { type: DataTypes.STRING, allowNull: false },
    option_c: { type: DataTypes.STRING, allowNull: false },
    option_d: { type: DataTypes.STRING, allowNull: false },
    correct_option: { type: DataTypes.STRING, allowNull: false },
    test_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Tests',
            key: 'id'
        }
    }
});
Question.belongsTo(Test, { foreignKey: 'test_id' });
Test.hasMany(Question, { foreignKey: 'test_id', onDelete: 'CASCADE' });
module.exports = Question;