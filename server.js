const express = require('express')
const app = express()
const port = process.argv[2] || 8080
// const router = express.Router()
















app.listen(port, () => {
    console.log(`Listening on ${port}`)
})