const { Router } = require ('express')
const { getAllTodos, getTodoById, createNewTodo, updateTodo, deleteTodo, getTodosWithCategories } = require('../controllers/todos.controller')
const router = require('./users.routes')

const todoRoutes = Router()

router.get('/todos', getAllTodos)
router.get('/todos/:id', getTodoById)
router.get( '/todos/:id/categories' ,getTodosWithCategories)

router.post('/todos', createNewTodo)

router.put('/todos/:id', updateTodo)

router.delete('/todos/:id', deleteTodo)

module.exports = todoRoutes