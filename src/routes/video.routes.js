const { Router } = require ('express')
const { uploadVideo , deleteVideo } = require('../controllers/video.controller')

const router = Router()

router.post('/videos', uploadVideo )
router.delete('/videos/:id', deleteVideo )


module.exports = router