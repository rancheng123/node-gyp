
var path = require('path');
var workPlace = path.resolve(__dirname,'..');

var addon = require(workPlace + '/build/Release/binding.node')

var a = 3