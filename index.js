const express = require("express")
const helmet = require("helmet")
const welcomeRouter = require('./routers/welcomeRouter')
const projectRouter = require('./routers/projectRouter')

const server = express()
const port = process.env.PORT || 4000


server.use(helmet())
server.use(express.json())

server.use(welcomeRouter)
server.use('/projects', projectRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
