const http = require('http');
const fs = require('fs');
const [node, path, port, file] = process.argv;

const server = http.createServer((request, response) => {
    fs.createReadStream(file).pipe(response);
}).listen(port);