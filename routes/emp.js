const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const EmployeeModel = require("../models/Emp")


router.get('/employees', async (req, res) => {
    // 200
    // User can get all employee list
    try{
        const employees = await EmployeeModel.find()
        res.status(200).send(employees)
    } catch (error) {
        res.status(400).send("Cant access employee list")
    }
})

router.post('/employees', async(req, res) => {
    // 201
    // User can create new employee
    try{
        const newEmployee = new EmployeeModel(req.body)
        const employee = await newEmployee.save()
        res.status(201).send(employee)
    } catch(error){
        res.status(400).send(error)
    }
})

router.get('/employees/:eid', async (req, res) => {
    // 200
    // User can get employee details by employee id
    try{
        const employee = await EmployeeModel.findByIdAndUpdate(req.params.eid, req.body)
        res.status(200).send(employee)
    } catch (error) {
        res.status(400).send("Cant find employee")
    }
})

router.put('/employees/:eid', async (req, res) => {
    // 200
    // User can update employee details
    try{
        const updateEmployee = await EmployeeModel.findByIdAndUpdate(req.params.eid, req.body)
        res.status(200).send(updateEmployee)
    } catch(error){
        res.status(400).send(error)
    }
})
router.delete('/employees/:eid', async (req, res) => {
    // 204
    // User can delete employee by employee id
    try{
        const deleteEmployee = await EmployeeModel.findByIdAndDelete(req.params.eid)
        if(!deleteEmployee){
            res.status(400).send({message: "No Employee to Delete"})
        }
        res.status(204).send(deleteEmployee)
    } catch(error){
        res.status(400).send(error)
    }
})

module.exports = router


