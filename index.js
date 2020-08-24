const express = require('express')
require('./db/mongoose')
const bootcampRouter = require('./routes/bootcamps')




const app = express()
const port = process.env.PORT

app.use(express.json())

app.use(bootcampRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})