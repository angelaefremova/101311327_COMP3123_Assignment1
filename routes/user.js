const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const UserModel = require("../models/User")


router.post('/signup', async (req, res) => {
    //Response code 201
    //Allow user to create new account
    try{
        const newUser = new UserModel(req.body)
        const user = await UserModel.find()
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/login', async (req, res) => {
    //Response code 200
    //Allow user to access the system
    try{
        const findUser = await UserModel.findOne(req.params.user, req.body)
        res.status(200).send("User logged in successfully")
    } catch(error){
        res.status(400).send(error)
    }
})

module.exports = router