const fs = require('fs')

fs.unlink('nuevo_directorio1/archivoy.txt', (err) => {
  if (err) {
    console.error(err)
  }
  
  console.log('se elimino correctamente')
})