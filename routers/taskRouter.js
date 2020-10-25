const express = require("express")
const Task = require("../models/task")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
        const task = await Task.find()
        res.json(task)
    } catch (err){
        next(err)
    }
})

router.post('/',  (req, res) => {
    const taskData = req.body

    Task.add(taskData)
    .then(task => {
        res.status(201).json(task)
    }).catch(err=>{
        res.status(500).json({message: 'failed to create a new task'})
    })
})

module.exports = router