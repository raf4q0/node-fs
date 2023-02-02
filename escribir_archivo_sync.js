const fs = require('fs');

const contenido = 'Este es el contenido del archivo';
try {
  fs.writeFileSync('otro-archivo', contenido);
  console.log('Archivo escrito con éxito');
} catch (error) {
  console.error(`Error al escribir el archivo: ${error}`);
}
