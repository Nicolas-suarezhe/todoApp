const Courses = require('../models/courses.model')
const UsersCourses = require('../models/users-courses.model')
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

    static async getUserByPk(id) {
        try {
            const result = await Users.findByPk(id,{
                attributes:["id","first_name","last_name","email"]
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async getUserWithCourses(id) {
        try {
            const result = await Users.findByPk(id,{
                attributes:["id","first_name","last_name","email"],
                include:{
                    attributes: ["user_id"],
                    model: UsersCourses,
                    as: "courses",
                    include:{
                        attributes:["title"],
                        model: Courses,
                        as: "courses"
                    }
                }
            })
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

    static async createACourse(id, newCourse) {
        try {
            const result = await Courses.create(newCourse,{
                where:{
                    user_id:{id}
                }// DID NOT FINISH
            })
            return result
        } catch (error) {
            throw error
        }
    }




}


module.exports = UserServices