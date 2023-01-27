const db = require("../utils/database")
const {DataTypes} = require("sequelize");
const Users = require("./users.model");


const Categories = db.define( "categories", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    }
},
{
    timestamps:false //Quita los createdAt y esas cosas
}
)

module.exports = Categories;