const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const UserModel = require("../models/User");

router.post("/signup", async (req, res) => {
  //Response code 201
  //Allow user to create new account
  try {
    const newUser = new UserModel(req.body);
    const user = await newUser.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).json({message: "Please enter valid username and password"});
  }
});

router.post("/login", async (req, res) => {
//Response code 200
//Allow user to access the system

});

module.exports = router;
