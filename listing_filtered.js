'use strict';
const fs = require("fs");

const destination = process.argv[2];
const extension = process.argv[3];
const listFiles = undefined;
const reg = new RegExp(`.*\.${extension}` );

console.log(process.argv);

function readMyFile() {
    fs.readdir(destination, function doneReading(err, files) {
        const filtredfiles = files.filter(files => files.match(reg));
        filtredfiles.forEach(file => console.log(file));
    });
}

readMyFile();