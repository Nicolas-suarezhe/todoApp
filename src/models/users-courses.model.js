const db = require("../utils/database")

const {DataTypes} = require("sequelize");

const UsersCourses = db.define( "users_courses", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "course_id"
    }
},
{
    timestamps:false 
}
)

module.exports = UsersCourses;