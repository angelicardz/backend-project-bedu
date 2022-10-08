const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env['DATABASE_URL'], {dialectOptions: {
    ssl: {
        rejectUnauthorized: false
    }
}});

module.exports = sequelize;