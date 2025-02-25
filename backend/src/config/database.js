const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const path = require('path');

// Thêm dòng này để chỉ định đường dẫn chính xác đến file .env
dotenv.config({ path: path.join(__dirname, '../../.env') });

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT,
        // Thêm logging để debug
        logging: console.log
    }
);

module.exports = sequelize;