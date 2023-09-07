const http = require('http')

const server = http.createServer(
    (request, response) => { 
        response.write('Hey')
        response.end()
    }
)

server.listen(3003)