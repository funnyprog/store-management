require('dotenv').config()
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')

const models = require('./models/models')
const errorHandler = require('./middleware/ErrorHandlingMIddleware')

const express = require('express')
const sequelize = require('./db')
const router = require('./routes/index')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

app.use('/api', router)

app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
