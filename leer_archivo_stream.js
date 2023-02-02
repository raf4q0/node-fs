const fs = require('fs')
const stream = fs.createReadStream('archivo.txt', { start: 1, end: 20 })

stream.on('data', chunk => {
  console.log(chunk.toString())
})

stream.on('error', err => {
  console.error(err)
})

stream.on('end', () => {
  console.log('===========')
  console.log('Fin de lectura')
})