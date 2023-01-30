const db = require("../utils/database")
const Users = require("../models/users.model")
const Courses = require("../models/courses.model")
const Categories = require("../models/categories.model")
const Videos = require("../models/videos.model")
const CoursesCategories = require("../models/courses-categories.model")
const UsersCourses = require("../models/users-courses.model")


const users = [
    {first_name:"nico", last_name: "suarez", email:"nico@gmail.com", password:"1234"},
    {first_name:"nathi", last_name: "restrepo", email:"nathi@gmail.com",password:"12345"},
    {first_name:"mila", last_name: "suarestrepo", email:"mila@gmail.com",password:"123456"}
]

const courses = [
    {
        title:"html, css y javascript",
        description: "para páginas web",
        instructor:"Brenda"
    },
    {
        title:"react",
        description: "para cosas mas grandes",
        instructor:"Andres"
    },
    {
        title:"node",
        description: "magia oscura",
        instructor:"Ian"
    }
]

const categories = [
    {name: "desarrollo web", course_id: 1},           
    {name: "educacion", course_id: 1},
    {name: "trabajo", course_id: 1},  

    {name: "apps", course_id: 2}, 
    {name: "educacion", course_id: 2},
    {name: "trabajo", course_id: 2},

    {name: "backend", course_id: 3}, 
    {name: "educacion", course_id: 3},
    {name: "trabajo", course_id: 3},  
]

const videos = [
    {
        title:"Aprende HTML y CSS - Curso Desde Cero",
        url:"https://www.youtube.com/watch?v=XqFR2lqBYPs",
        course_id:1
    },
    {
        title:"Aprende JavaScript - Curso Completo desde Cero",
        url:"https://www.youtube.com/watch?v=ivdTnPl1ND0",
        course_id:1
    },
    {
        title:"Aprende React Desde Cero - Curso de React Con Proyectos",
        url:"https://www.youtube.com/watch?v=6Jfk8ic3KVk",
        course_id:2
    },
    {
        title:"Aprende Node.js y Express - Curso desde Cero",
        url:"https://www.youtube.com/watch?v=1hpc70_OoAg",
        course_id:3
    }
]

const coursesCategories = [
    {category_id: 1, course_id: 1},
    {category_id: 2, course_id: 1},
    {category_id: 3, course_id: 1},

    {category_id: 4, course_id: 2},
    {category_id: 5, course_id: 2},
    {category_id: 6, course_id: 2},

    {category_id: 7, course_id: 3},
    {category_id: 8, course_id: 3},
    {category_id: 9, course_id: 3}
]

const userCourses = [
    {user_id: 1, course_id: 1},
    {user_id: 2, course_id: 1},
    {user_id: 3, course_id: 1},
    {user_id: 1, course_id: 2},
    {user_id: 3, course_id: 2},
    {user_id: 1, course_id: 3},
    {user_id: 2, course_id: 3}
]

db.sync({force:true})
    .then(()=>{
        console.log("Starting the seeding")
            users.forEach((user) => Users.create(user))

        setTimeout(()=>{
            courses.forEach((course) => Courses.create(course))
        },200)
        setTimeout(()=>{
            categories.forEach((category) => Categories.create(category))
        },400)
        setTimeout(()=>{
            videos.forEach((video) => Videos.create(video))
        },600)
        setTimeout(()=>{
            coursesCategories.forEach((item) => CoursesCategories.create(item))
        },800)
        setTimeout(()=>{
            userCourses.forEach((item) => UsersCourses.create(item))
        },1000)
    })
    .catch((error)=>console.log(error))