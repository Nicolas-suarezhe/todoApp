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
        const result = await UserServices.getById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getUserAndTasks = async (req,res)=>{
    try {
        const id = req.params.id
        const result = await UserServices.getUAndTasks(id)
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getCategoriesFromTasks = async (req,res)=>{
    try {
        const id = req.params.id
        const result = await UserServices.getCateFromTasks(id)
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getUsersCategories = async (req,res)=>{
    try {
        const id = req.params.id
        const result = await UserServices.getCateFromUsers(id)
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

const deleteUser = async (req,res)=>{
    try {
        const id = req.params.id
        const result = await UserServices.deleteUser(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}



module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserAndTasks,
    getCategoriesFromTasks,
    getUsersCategories
}