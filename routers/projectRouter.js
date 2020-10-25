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

router.post('/',  (req, res) => {
    const projectData = req.body

    Project.add(projectData)
    .then(project => {
        res.status(201).json(project)
    }).catch(err=>{
        res.status(500).json({message: 'failed to create a new project'})
    })
})


module.exports = router