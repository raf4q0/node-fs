const fs = require('fs')

try {
  fs.mkdirSync('nuevo_directorio1')
  console.log('directorio se creo correctamente')
} catch (err) {
  console.error(err)
}