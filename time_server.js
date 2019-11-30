const net = require('net');

const port = process.argv[2];

function addZero(nb) {
    if (nb < 10) {
        nb = '0' + nb;
    }
    return nb;
}
const server = net.createServer( (socket) => {
    const date = new Date();
    let today = date.getFullYear() + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate()) + ' ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes());

});

server.listen(port, () => {
    console.log(today);
});