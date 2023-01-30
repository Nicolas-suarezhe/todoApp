const express = require ('express')
const db = require('./utils/database')
const initModels = require ("./models/init.model")
const userRoutes = require ('./routes/users.routes')
const coursesRoutes = require ('./routes/courses.routes')
const categoryRoutes = require ('./routes/category.routes')
const videoRoutes = require ('./routes/video.routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
const PORT = 9000

db.authenticate()
    .then(()=> console.log('Autenticado'))
    .catch((error)=> console.log(error))

initModels();

db.sync({force:false})  
    .then(()=> console.log('Sincronizado'))
    .catch((error)=> console.log(error))



app.use('/api/v2', coursesRoutes )
app.use('/api/v2', userRoutes )
app.use('/api/v2', videoRoutes )
app.use('/api/v2', categoryRoutes )




app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})