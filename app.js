//npm dependencies
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')


//local imports
const dbService = require('./services/dbService')
const config = require('./configurations/config')





app.use(cors())
app.use(morgan("combined"))

app.get(`${config.urlPath}/autofill`, (req,res) => {
    res.send('Hello')
})

app.listen(2000, () => {
    dbService.connect()
    console.log(`Server is running on port ${config.port}`)
})