const mongoose = require("mongoose")

//Defining Schema
const empSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true
    },
    gender:{
        type: String,
        enum: ['Male', 'Female', 'Other'],
    },
    salary: {
        type: Number,
        require: true
    }
})

//Creating Model from Schema
module.exports = mongoose.model("employees", empSchema)