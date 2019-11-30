const fs = require("fs");

function readMyFile() {
    fs.readFile(process.argv[2], function doneReading(err, superFile) {
        linesNb = superFile.toString().split('\n').length -1;
        console.log(linesNb);
    })
}

readMyFile();

