const express = require('express')
const userRouter = require('./routes/user')
const empRouter = require('./routes/emp')
const app = express()
const mongoose = require("mongoose")


const SERVER_PORT = 8001

const DB_CONNECTION_STRING = "mongodb+srv://101311327-Angela:school@cluster0.sjruygg.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority"
mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(express.json())
app.use(express.urlencoded())

app.use('/api/user', userRouter)
app.use('/api/emp', empRouter)

app.get('/', (req, res) => {
    res.send('Assignment 1')
})

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})



