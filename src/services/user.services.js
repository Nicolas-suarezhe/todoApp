const Users = require('../models/users.model')

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
}


module.exports = UserServices