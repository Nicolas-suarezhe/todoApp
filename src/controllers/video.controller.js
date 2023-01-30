const VideoServices = require('../services/video.services')



const uploadVideo = async (req, res) =>{
    try {
        const newVideo = req.body
        const result = await VideoServices.create(newVideo)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const deleteVideo = async (req, res) =>{
    try {
        const id = req.params.id
        const result = await VideoServices.eliminateVideo(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}




module.exports = {
    uploadVideo,
    deleteVideo
}