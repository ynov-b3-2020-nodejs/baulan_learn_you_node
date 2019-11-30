const fs = require("fs");

const superFile = fs.readFileSync(process.argv[2]);

console.log(superFile.toString().split('\n').length - 1);