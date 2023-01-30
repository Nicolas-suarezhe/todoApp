const Categories = require('../models/categories.model')



class CategoryServices {

 
    static async createCategory(newCategory){
        try {
            const result = Categories.create(newCategory)
            return result
        } catch (error) {
            throw error
        }
    }


    static async eliminateCategory(id){
        try {
            const result = Categories.destroy({
                where:{id}
            })
            return result
        } catch (error) {
            throw error
        }
    }

}


module.exports = CategoryServices