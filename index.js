const express = require('express')
app = express()

app.get('/', (req, res) => {
    console.log(req.data)
    res.send('Hello world')
})

app.listen(3000, () => {
    console.log('to escutando a porta 3000')
})