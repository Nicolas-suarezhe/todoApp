const Todos = require("../models/todos.model")


class TodosServices {
    static async getAllTodos() {
        try {
            const result = await Todos.findAll()
            return result
        } catch (error) {
            throw error
        }
    }

    static async getTodoById(id){
        try {
            const result = await Todos.findByPk(id)
            return result
        } catch (error) {
            throw error
        }
    }

    static async createNewTodo(newUser){
        try {
            const result = Todos.create(newUser)
            return result
        } catch (error) {
            throw error
        }
    }

    static async updateTodo(id, field){
        try {
            const result = Todos.update(field, {
                where:{id}
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async deleteTodo(id){
        try {
            const result = await Todos.destroy({
                where:{id}
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async withCategories(id){
        try {
            const result = await Todos.findOne({
                where:{id}
            })
            return result
        } catch (error) {
            throw error
        }
    }
}


module.exports = TodosServices