const express = require('express')
const app = express()
var cors = require('cors')
const port = 4555

var corsOptions = {
    exposedHeaders: ['random-response-header']
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.set('random-response-header', 'this is my value');
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})