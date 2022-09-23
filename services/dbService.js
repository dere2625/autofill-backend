const mongoose = require('mongoose')
const config = require('../configurations/config')

function connectDb(){
    mongoose.connect(config.mongoConnectionString).then(() => {
        console.log('database connected')
    })
}

module.exports = {connect : connectDb}
