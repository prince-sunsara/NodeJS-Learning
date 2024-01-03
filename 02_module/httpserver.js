const http = require("http");
const fs = require("fs");
const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', "text/html")
    console.log(req.url)

    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>Hello there! This is home page</h1>')
    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>Hello there! This is about page</h1>')
    } else if (req.url == '/hello') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data)
    } else {
        res.end('<h1>Hello there! This is unknown page</h1>')
    }
})

server.listen(port, () => {
    console.log("Server is started");
    console.log(`Server is running at port ${port}`)
})