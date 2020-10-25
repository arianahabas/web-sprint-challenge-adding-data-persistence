const express = require("express")
const Resource = require("../models/resource")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
        const resource = await Resource.find()
        res.json(resource)
    } catch (err){
        next(err)
    }
})

router.post('/',  (req, res) => {
    const resourceData = req.body

    Resource.add(resourceData)
    .then(resource => {
        res.status(201).json(resource)
    }).catch(err=>{
        res.status(500).json({message: 'failed to create a new resource'})
    })
})

module.exports = router