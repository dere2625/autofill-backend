const { default: mongoose, mongo } = require("mongoose");

const accountSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    firstName : {
        type: String,
        required : true
    },
    lastName : {
        type: String,
        required : true
    },

    password : {
        type : String,
        required : true
    }, 

    userType : {
        type : String,
        required : true
    }, 

    created : {
        type : Date,
        required : true
    },

    lastUpdated : {
        type : Date,
        required : true
    }
})

const account = mongoose.model('account', accountSchema)

module.exports = account