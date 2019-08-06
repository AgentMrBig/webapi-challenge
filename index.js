const server = require('./server')
const PORT = process.env.PORT || 4200

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

