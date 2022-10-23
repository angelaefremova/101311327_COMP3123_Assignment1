const mongoose = require("mongoose")

//Defining Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    }
})

//Creating Model from Schema
module.exports = mongoose.model("user", userSchema)