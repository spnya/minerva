const express = require('express')

const app = express()

const web_port = 80

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(web_port, () => console.log(`Server started on port ${web_port}`))
