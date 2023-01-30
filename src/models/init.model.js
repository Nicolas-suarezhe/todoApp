const Categories = require("./categories.model");
const CoursesCategories = require("./courses-categories.model");
const Courses = require("./courses.model");
const UsersCourses = require("./users-courses.model");
const Users = require("./users.model");
const Videos = require("./videos.model");


const initModels = ()=>{

    Videos.belongsTo(Courses, {as:'courses', foreignKey: 'course_id'});
    Courses.hasMany(Videos, {as:'video', foreignKey:'course_id'});

    UsersCourses.belongsTo(Users, {as:'author', foreignKey:'user_id'});
    Users.hasMany(UsersCourses,{as:'courses', foreignKey:'user_id'});

    UsersCourses.belongsTo(Courses,{as:'courses', foreignKey:'course_id'});
    Courses.hasMany(UsersCourses,{as:'author', foreignKey:'course_id'});



    CoursesCategories.belongsTo(Courses, {as:'course', foreignKey:'course_id'});
    Categories.hasMany(CoursesCategories,{as:'category', foreignKey:'course_id'});

    CoursesCategories.belongsTo(Categories,{as:'category', foreignKey:'category_id'});
    Courses.hasMany(CoursesCategories,{as:'course', foreignKey:'category_id'});

}

module.exports = initModels