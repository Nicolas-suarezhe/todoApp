const Categories = require('../models/categories.model')
const Todos = require('../models/todos.model')
const Users = require('../models/users.model')
const TodosCategories = require ('../models/todos-categories.model')

class UserServices {
    static async getAll() {
        try {
            const result = await Users.findAll()
            return result
        } catch (error) {
            throw error
        }
    }

    static async getById(id){
        try {
            const result = await Users.findByPk(id)
            return result
        } catch (error) {
            throw error
        }
    }

    static async create(newUser){
        try {
            const result = Users.create(newUser)
            return result
        } catch (error) {
            throw error
        }
    }

    static async updateUser(id, field){
        try {
            const result = Users.update(field, {
                where:{id}
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async deleteUser(id){
        try {
            const result = await Users.destroy({
                where:{id}
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async getUAndTasks(id){
        try {
            const result = await Users.findOne({
                where:{id},
                attributes:["username"], //esto sirve para únicamente ver el username cuando se pida la info, para no ver password o demás información innecesaria
                include:{
                    attributes:["title", "description", "isComplete"],
                    model: Todos,
                    as: "task"
                }
            })
            return result 
        } catch (error) {
            throw error
        } 
    }

    static async getCateFromTasks(id){
        try {
            const result = await Users.findOne({
                where:{id},
                attributes:["username"],
                include:{
                    attributes:["title", "description", "isComplete"],
                    model: Todos,
                    as: "task",
                    include:{
                        model: TodosCategories,
                        as: "categories",
                        attributes:["category_id"],
                        include:{
                            model: Categories,
                            as:"category",
                            attributes:["name"]
                        }
                    }
                }
            })
            return result 
        } catch (error) {
            throw error
        } 
    }

}


module.exports = UserServices