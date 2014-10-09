var express = require('express');
var app = module.exports = express();
var path = require('path');

var staticAssets = '../public/';

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, staticAssets, 'index.html'));
});

//////////////////
// Static files //
//////////////////
app.use(express.static(path.join(__dirname, staticAssets)));
