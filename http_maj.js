'use strict'; 

const http = require('http');
const fs = require('fs');
const map = require('through2-map');
const [node, path, port, file] = process.argv;

const changeUpperCase = map({wantStrings: true}, (str) => {
    return str.toUpperCase();
})

const server = http.createServer((request, response) => {
    if(request.method !== 'POST') {   
        response.writeHead(400, 'Erreur 400');
    }
    request.pipe(changeUpperCase).pipe(response);
}).listen(port);