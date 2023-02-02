const fs = require('fs')

const title = "KodemiaMX"

const contenido = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>title</title>
</head>
<body> 
</body>
</html>`

fs.writeFile('index.html', contenido, (err) => {
  if (err) {
    console.log(err)
  }
  
  console.log('Archivo modificado correctamente')
})
