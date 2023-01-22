const db = require("../utils/database")
const Users = require("../models/users.model")
const Todos = require("../models//todos.model")
const Categories = require("../models/categories.model")
const TodosCategories = require("../models/todos-categories.model")

const users = [
    {
        username:"nico",
        email:"nico@gmail.com",
        password:"1234"
    },
    {
        username:"nathi",
        email:"nathi@gmail.com",
        password:"12345"
    },
    {
        username:"mila",
        email:"mila@gmail.com",
        password:"123456"
    }
]

const todos = [
    {
        title:"Estudiar node",
        description:"Terminar de ver las clases pendientes y hacer el entregable",
        userId:1
    },
    {
        title:"Pasear a Mila",
        description:"A ver si aprende a hacer chichi donde es",
        userId:1
    },
    {
        title:"Lavar los platos",
        description:"Para que no huela feo",
        userId:2
    },
    {
        title:"Hacer ejercicio",
        description:"Quiero estar mejor de salud",
        userId:3
    }
]

const categories = [
    {name: "personal"},//1
    {name: "educacion"},//2
    {name: "salud"},//3
    {name: "trabajo"},//4
    {name: "hogar"},//5
    {name: "cocina"},//6
    {name: "deporte"},//7
    {name: "ocio"},//8
    {name: "financiero"},//9
    {name: "entretenimiento"},//10
]

const todosCategories = [
    {categoryId: 1, todoId: 1},
    {categoryId: 2, todoId: 1},
    {categoryId: 4, todoId: 1},
    {categoryId: 1, todoId: 2},
    {categoryId: 5, todoId: 2},
    {categoryId: 6, todoId: 2},
    {categoryId: 1, todoId: 3},
    {categoryId: 5, todoId: 3},
    {categoryId: 6, todoId: 3},
    {categoryId: 1, todoId: 4},
    {categoryId: 3, todoId: 4},
    {categoryId: 6, todoId: 4},
    {categoryId: 7, todoId: 4},
]

db.sync({force:true})
    .then(()=>{
        console.log("Iniciando a sembrar")
        users.forEach((user) => Users.create(user))
        setTimeout(()=>{
            todos.forEach((todo) => Todos.create(todo))
        },100)
        setTimeout(()=>{
            categories.forEach((todo) => Categories.create(todo))
        },150)
        setTimeout(()=>{
            todosCategories.forEach((todo) => TodosCategories.create(todo))
        },200)
    })
    .catch((error)=>console.log(error))