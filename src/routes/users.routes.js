const { Router } = require ('express')
const { getAllUsers ,getUserById, getUserWithCourse, createUser, updateUser, createUserCourse} = require('../controllers/users.controller')

const router = Router()

router.get('/users', getAllUsers) // obtain all users
router.get('/users/:id', getUserById ) // obtain user by id
router.get('/users/:id/courses', getUserWithCourse ) ///obtain user and them courses
router.post('/users', createUser) // create an user
router.put('/users/:id', updateUser) // update an user
router.post('/users/:id/courses', createUserCourse) // add a course to an user --- DID NOT FINISH


module.exports = router