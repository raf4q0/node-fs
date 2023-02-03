const fs = require('fs')

const title = "KodemiaMX"

const contenido = `\njulio;24`

fs.appendFile('archivo.txt', contenido, (err) => {
  if (err) {
    console.log(err)
  }
  
  console.log('Archivo modificado correctamente')
})
