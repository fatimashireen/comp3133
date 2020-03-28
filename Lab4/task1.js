const fs = require('fs');
const path = require('path');

//get current directory using process object
current_dir = process.cwd();

//Use fs.readdir(path[, options], callback) to asynchronously read the contents
fs.readdir(current_dir, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
    });
});