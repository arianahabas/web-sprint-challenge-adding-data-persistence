const express = require("express")
const Project = require("../models/project")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
        const projects = await Project.find()
        res.json(projects)
    } catch (err){
        next(err)
    }
})

module.exports = router