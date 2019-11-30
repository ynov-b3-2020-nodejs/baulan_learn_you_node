const http = require('http');

const destination = process.argv[2];

http.get(destination, function (response) {
    response.setEncoding('utf8');

    const data = [];

    response.on('data', (res) => {
        data.push(res);
    });
    response.on('end', () => {
        console.log(data.length);
        console.log(data.join(''));
    });
    response.on('error', console.error);
}).on('error', console.error);


