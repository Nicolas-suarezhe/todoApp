const db = require("../utils/database")
const {DataTypes} = require("sequelize");


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
    course_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "course_id"
    }
},
{
    timestamps:false 
}
)

module.exports = Categories;