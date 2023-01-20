const TodosServices = require('../services/todos.services')


const getAllTodos = async (req,res)=>{
    try {
        const result = await TodosServices.getAllTodos()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getTodoById = async (req,res)=>{
    try {
        const id = req.params.id
        const result = await UserServices.getTodoById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const createNewTodo = async (req, res) =>{
    try {
        const newUser = req.body
        const result = await UserServices.createNewTodo(newUser)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const updateTodo = async (req,res)=>{
    try {
        const id = req.params.id
        const field = req.body
        const result = await UserServices.updateTodo(id, field)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const deleteTodo = async (req,res)=>{
    try {
        const id = req.params.id
        const result = await UserServices.deleteTodo(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}




module.exports = {
    getAllTodos,
    getTodoById,
    createNewTodo,
    updateTodo,
    deleteTodo
}