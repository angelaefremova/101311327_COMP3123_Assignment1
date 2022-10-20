const express = require('express')
const userRouter = require('./routes/user')
const empRouter = require('./routes/emp')
const app = express()

app.use('/api/user', userRouter)
app.use('/api/emp', empRouter)

app.get('/', (req, res) => {
    res.send('Assignment 1')
})

app.listen(3000)