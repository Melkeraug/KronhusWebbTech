const express = require('express')
const databaseModule = require('./databaseModule')
const app = express()
const port = 3000

app.use(express.static(__dirname + '\\staticFiles\\'))
app.use(express.json())
app.use(express.urlencoded())

app.post('/index.html', function (req, res) {
    

    res.sendStatus(418)
})

app.listen(port, () => console.log(`Example app listening on port port!`))