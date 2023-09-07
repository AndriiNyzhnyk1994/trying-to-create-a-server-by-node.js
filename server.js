const http = require('http')


let requestsCount = 0

const server = http.createServer((request, response) => {
    requestsCount++

    switch (request.url) {
        case '/students':
            response.write('students ')
            break;
        case '/courses':
            response.write('React, TS, Redux')
            break;
        default: response.write('404 Not found')

    }

    response.write(' Hey ' + requestsCount)
    response.end()
}
)

server.listen(3003)