const Videos = require('../models/videos.model')



class VideoServices {

 
    static async create(newVideo){
        try {
            const result = Videos.create(newVideo)
            return result
        } catch (error) {
            throw error
        }
    }

    static async eliminateVideo(id){
        try {
            const result = Videos.destroy(
                {
                    where:{id}
                }
            )
            return result
        } catch (error) {
            throw error
        }
    }




}


module.exports = VideoServices