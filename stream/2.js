const fs = require('fs')
const server = require('http').createServer()

server.on('requist', (req, res) => {
  const src = fs.createReadStream('./big.file')
  src.pipe(res)
})

server.listen(9999)
