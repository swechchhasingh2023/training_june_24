// server creation with nodejs

let http = require('http')

// request req > what we send to server (params, query params, body)
// response res> what we get from the server 

let server = http.createServer((req, res)=>{
res.write("Hi from code node server")
res.end()
})

server.listen(8766)