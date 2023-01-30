const UserServices = require('../services/user.services')


const getAllUsers = async (req,res)=>{
    try {
        const result = await UserServices.getAll()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getUserById = async (req,res)=>{
    try {
        const id = req.params.id
        const result = await UserServices.getUserByPk(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getUserWithCourse = async (req,res)=>{
    try {
        const id = req.params.id
        const result = await UserServices.getUserWithCourses(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const createUser = async (req, res) =>{
    try {
        const newUser = req.body
        const result = await UserServices.create(newUser)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const updateUser = async (req,res)=>{
    try {
        const id = req.params.id
        const field = req.body
        const result = await UserServices.updateUser(id, field)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const createUserCourse = async (req,res)=>{
    try {
        const id = req.params.id
        const newCourse = req.body
        const result = await UserServices.createACourse(id, newCourse)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }// DID NOT FINISH
}




module.exports = {
    getAllUsers,
    getUserById,
    getUserWithCourse,
    createUser,
    updateUser,
    createUserCourse
}