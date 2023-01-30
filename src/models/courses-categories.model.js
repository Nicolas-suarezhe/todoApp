const db = require("../utils/database")
const {DataTypes} = require("sequelize");

const CoursesCategories = db.define( "courses_categories", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "course_id"
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "category_id"
    }
},
{
    timestamps:false 
}
)

module.exports = CoursesCategories;