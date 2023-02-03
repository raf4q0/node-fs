const fs = require('fs')
const encoding = "utf8"

fs.readFile('archivo.txt', encoding, (err, data) => {
  if (err) {
    console.error(err)
    return;
  }

  console.log(data)
})