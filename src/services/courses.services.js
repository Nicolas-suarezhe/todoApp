const Categories = require("../models/categories.model")
const CoursesCategories = require("../models/courses-categories.model")
const Courses = require("../models/courses.model")
const Videos = require("../models/videos.model")


class CoursesServices {
    static async getEveryCourse() {
        try {
            const result = await Courses.findAll()
            return result
        } catch (error) {
            throw error
        }
    }

    static async getCoursesWCatAVid() {
        try {
            const result = await Courses.findAll({
                    attributes:["title"],
                    include:{
                        attributes:["title", "url"],
                        model: Videos,
                        as: "video",
                        attributes:["course_id"],
                        model: CoursesCategories,
                        as: "course",
                        include:{
                            attributes:["name"],
                            model: Categories,
                            as:"category"
                        }
                    }}
            )
            return result
        } catch (error) {
            throw error
        }
    }

    static async createNewCourse(newCourse) {
        try {
            const result = await Courses.create(newCourse)
            return result
        } catch (error) {
            throw error
        }
    }

    static async updateCourse(id, field){
        try {
            const result = Courses.update(field, {
                where:{id}
            })
            return result
        } catch (error) {
            throw error
        }
    }
    
    
}




module.exports = CoursesServices