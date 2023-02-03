const fs = require('fs')

fs.exists('nuevo_directorio1', (existe) => {
  if (existe) {
    console.log('exite directorio')
  } else {
    console.log('el directorio no existe')
  }
})