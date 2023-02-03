const fs = require('fs');

fs.createReadStream('index.html')
  .pipe(fs.createWriteStream('index.html', { flags: 'r+' }))
  .on('finish', () => {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) throw err;
      const updatedData = data.replace('</body>', '<h1>Hello World</h1>\n</body>');
      fs.writeFile('index.html', updatedData, (err) => {
        if (err) throw err;
        console.log('Se ha agregado el h1 al body en el archivo index.html.');
      });
    });
  });