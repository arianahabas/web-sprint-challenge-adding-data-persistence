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

module.exports = router