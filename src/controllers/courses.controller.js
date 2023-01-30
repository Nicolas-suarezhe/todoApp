const CoursesServices = require('../services/courses.services')


const getAllCourses = async (req,res)=>{
    try {
        const result = await CoursesServices.getEveryCourse()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getAllCoursesWCateAndVid = async (req,res)=>{
    try {
        const result = await CoursesServices.getCoursesWCatAVid()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const createCourse = async (req,res)=>{
    try {
        const newCourse = req.body
        const result = await CoursesServices.createNewCourse(newCourse)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const editCourse = async (req,res)=>{
    try {
        const id = req.params.id
        const field = req.body
        const result = await CoursesServices.updateCourse(id, field)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}



module.exports = {
    getAllCourses,
    getAllCoursesWCateAndVid,
    createCourse,
    editCourse
}