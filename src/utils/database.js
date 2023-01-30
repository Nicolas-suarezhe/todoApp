const { Sequelize } = require ("sequelize")

const db = new Sequelize({
    database: "courseapp",
    username: "postgres",
    host: "localhost",
    port: "5433",
    password: "root",
    dialect: "postgres",
    logging: false
})

module.exports = db;