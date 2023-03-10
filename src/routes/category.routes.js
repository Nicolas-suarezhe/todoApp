const { Router } = require ('express')
const { createCategory, deleteCategory } = require('../controllers/category.controller')

const router = Router()

router.post('/categories', createCategory)
router.delete('/categories/:id', deleteCategory)

module.exports = router