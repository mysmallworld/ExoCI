const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/html', (req, res) => {
    res.send("<html><body><h1>Bonjour html</h1></body></html>")
})

let obj = {"age": 22, "nom" : "Jane"}
app.get('/premier-json', (req, res) => {
    res.send(Response.json(obj))
})

app.get('/transaction', (req, res) => {
    res.header('Content-Type', 'text/html')
    res.send("[100, 2000, 3000]")
})
    
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})