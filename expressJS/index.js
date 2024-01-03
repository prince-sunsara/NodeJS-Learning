const express = require('express')
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log("Server started at port 3000");
})