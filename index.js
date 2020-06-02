const app = require('.')
const http = require('http')
// const config = require('./utils/config')
// const logger = require('./utils/logger')

const server = http.createServer(app)

// server.listen(config.PORT, () => {
  // logger.info(`Server running on port ${config.PORT}`)
// })

const PORT = 3001;

server.listen(3001, () => {
  console.log(`Server running on port ${PORT}`)
})