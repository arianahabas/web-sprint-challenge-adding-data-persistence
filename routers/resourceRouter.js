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

module.exports = router