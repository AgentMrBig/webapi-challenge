const express = require('express')
const app = express()

const projectsRouter = require('./routes/projects')

app.use(express.json())
app.use('/api/projects', projectsRouter)


app.get('/', (req, res) => {
    res.json({
        message: `HEY.`
    })
})

module.exports = app