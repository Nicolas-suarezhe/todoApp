const { Router } = require ('express')
const { getAllCourses, getAllCoursesWCateAndVid, createCourse, editCourse} = require('../controllers/courses.controller')
const router = require('./users.routes')

const coursesRoutes = Router()

router.get('/courses', getAllCourses)
router.get('/courses/categories&videos', getAllCoursesWCateAndVid )
router.post('/courses', createCourse )
router.put('/courses/:id', editCourse )

module.exports = coursesRoutes