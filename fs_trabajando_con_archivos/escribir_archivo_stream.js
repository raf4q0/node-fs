const fs = require('fs');

const stream = fs.createWriteStream('otro-archivo-3.txt');
stream.write('Este es el contenido del archivo');
stream.end();
