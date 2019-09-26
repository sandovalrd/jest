const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
const { users } = require('./endpoints')
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const usersHandlers = users({ axios })
app.get('/', usersHandlers.get)
app.post('/', usersHandlers.post)
app.put('/:id', usersHandlers.put)
app.delete('/:id', usersHandlers.delete)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))