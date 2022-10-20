const express = require('express')
const router = express.Router()

router.get('/employees', (req, res) => {
    res.send('')
    // 200
    // User can get all employee list
})

router.post('/employees', (req, res) => {
    res.send('')
    // 201
    // User can create new employee
})

router.get('/employees/{eid}', (req, res) => {
    res.send('')
    // 200
    // User can get employee details by employee id
})
router.put('/employees/{eid}', (req, res) => {
    res.send('')
    // 200
    // User can update employee details
})
router.delete('/employees?eid=xxx', (req, res) => {
    res.send('')
    // 204
    // User can delete employee by employee id
})

module.exports = router


