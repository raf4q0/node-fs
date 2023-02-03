const fs = require('fs')

fs.readdir('nuevo_directorio', (err, files) => {
  if (err) {
    console.error(err)
  }

  files.forEach((file) => {
    console.log(file)
    fs.appendFile(`nuevo_directorio/${file}`, 'Hola Irving', () => {})
  })
})


