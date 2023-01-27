const { Router } = require ('express')
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, getUserAndTasks, getCategoriesFromTasks, getUsersCategories } = require('../controllers/users.controller')

const router = Router()

router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
router.get('/users/:id/todos', getUserAndTasks)
router.get('/users/:id/todos/categories', getCategoriesFromTasks)
router.get('/users/:id/categories', getUsersCategories)

router.post('/users', createUser)

router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)

module.exports = router