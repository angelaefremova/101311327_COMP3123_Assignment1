const mongoose = require("mongoose")

//Defining Schema
const empSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true,
        maxLength: 100
    },
    last_name: {
        type: String,
        require: true,
        maxLength: 50
    },
    email: {
        type: String,
        unique: true,
        maxLength: 50
    },
    gender:{
        type: String,
        enum: ['Male', 'Female', 'Other'],
        maxLength: 25
    },
    salary: {
        type: Number,
        require: true
    }
})

//Creating Model from Schema
module.exports = mongoose.model("employees", empSchema)