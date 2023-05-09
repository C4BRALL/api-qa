const express = require('express')
const app = express()
const port = 30012

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/webhook', (req, res) => {
  res.status(200).send(req.body)
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
