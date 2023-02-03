const fs = require('fs')

fs.mkdir('nuevo_directorio', (err) => {
  if (err) {
    console.error(err)
  }

  console.log('directorio creado correctamente')
})