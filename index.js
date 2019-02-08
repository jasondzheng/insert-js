const fs = require('fs');
const path = require("path");
// Needs dirname from importing module
exports.insert = function(dirname, relPath) {
    eval.call(module, fs.readFileSync(path.resolve(dirname, relPath)).toString());
};