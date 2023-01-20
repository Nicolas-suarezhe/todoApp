const db = require("../utils/database")
const Users = require("../models/users.model")
const Todos = require("../models//todos.model")


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
        title:"Tarea 1",
        description:"descripción 1",
        userId:1
    },
    {
        title:"Tarea 2",
        description:"descripción 2",
        userId:1
    },
    {
        title:"Tarea imposible",
        userId:2
    },
    {
        title:"Dormir",
        description:"quiero dormir ya",
        userId:3
    }
]

//const categories = []

//const todosCategories = []

db.sync({force:true})
    .then(()=>{
        console.log("Iniciando a sembrar")
        users.forEach((user) => Users.create(user))
        setTimeout(()=>{
            todos.forEach((todo) => Todos.create(todo))
        },100)
    })
    .catch((error)=>console.log(error))