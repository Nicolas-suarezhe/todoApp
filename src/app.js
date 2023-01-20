const express = require ('express')
const db = require('./utils/database')
const initModels = require ("./models/init.model")
const Users = require('./models/users.model')
const Todos = require('./models/todos.model')
const Categories = require('./models/categories.model')

const app = express()

app.use(express.json())

const PORT = 900


db.authenticate()
    .then(()=> console.log('Autenticado'))
    .catch((error)=> console.log(error))

initModels();

db.sync({force:false})  //compara lo que tengamos en la base de datos con lo que tiene en initModels, si existe una tabla no la crea de nuevo, si no existe, la crea y devuelve unan promesa (por eso se usa then y catch)
    .then(()=> console.log('Sincronizado'))
    .catch((error)=> console.log(error))





app.get('/', (req,res)=>{
    res.status(200).json({message:'Bienvenido al servidor'})//el código 200 es para 'decir' que todo salió bien
})



//       GET para todos los USERS ----------
app.get('/users', async (req,res)=>{
    try {
        //Vamos a colsultar todos los usuarios de la base de datos
        const result = await Users.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }

})


//       GET para un USER en ESPECÍFICO ------
app.get('/users/:id', async (req,res)=>{
    try {
        const  id = req.params.id;
        const result = await Users.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
    }
})

//    GET  para un usuario por el nombre
app.get('/users/username/:username', async (req,res)=>{
    try {
        const username = req.params.username
        const result = await Users.findOne({where:{username}})
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
})


//     POST para crear un usuario     ------
app.post('/users', async (req,res)=>{
    try {
        const newUser = req.body
        const result = await Users.create(newUser)
        res.status(201).json(result) //El 201 es para responder que se creó algo correctamente
    } catch (error) {
        res.status(400).json(error.message)
        console.log(error)
    }
})


//cambio de contraseña con un PUT  ------
app.put('/users/:id', async (req,res)=>{
    try {
        const id = req.params.id
        const field = req.body
        const result = await Users.update(field, {
            where: {id}
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
        console.log(error)
    }
})

//    DELETE de un USER -------------
app.delete('/users/:id', async (req,res)=>{
    try {
        const id = req.params.id
        const result = await Users.destroy({
            where:{ id }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
})





//------------PROYECTO ENTREGABLE-----------

app.get('/todos', async (req,res)=>{
    try {
        const result = await Todos.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
})

app.get('/todos/:id', async (req,res)=>{
    try {
        const  id = req.params.id;
        const result = await Todos.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
    }
})

app.post('/todos', async (req,res)=>{
    try {
        const newTodo = req.body
        const result = await Todos.create(newTodo)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

app.put('/todos/:id', async (req,res)=>{
    try {
        const id = req.params.id
        const field = req.body
        const result = await Todos.update(field, {
            where: {id}
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

app.delete('/todos/:id', async (req,res)=>{
    try {
        const id = req.params.id
        const result = await Todos.destroy({
            where:{ id }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
})










app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})