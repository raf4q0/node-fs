const fs = require('fs')
const encoding = 'utf8'

try {
  const data = fs.readFileSync('archivo1.txt', encoding)
  console.log(data)
} catch (err) {
  console.error(err)
}