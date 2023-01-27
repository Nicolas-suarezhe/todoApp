const express = require ('express')
const db = require('./utils/database')
const initModels = require ("./models/init.model")
const userRoutes = require ('./routes/users.routes')
const todoRoutes = require ('./routes/todos.routes')
const authRoutes = require ('./routes/auth.routes')
const cors = require('cors')

const app = express()


app.use(cors())
app.use(express.json())
const PORT = 900

db.authenticate()
    .then(()=> console.log('Autenticado'))
    .catch((error)=> console.log(error))

initModels();

db.sync({force:false})  //compara lo que tengamos en la base de datos con lo que tiene en initModels, si existe una tabla no la crea de nuevo, si no existe, la crea y devuelve unan promesa (por eso se usa then y catch)
    .then(()=> console.log('Sincronizado'))
    .catch((error)=> console.log(error))

app.use('/api/v1', todoRoutes )
app.use('/api/v1', userRoutes )
app.use('/api/v1', authRoutes )




app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})