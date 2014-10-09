var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var routes = require('./routes/routes');
app.use(routes);

var stream;

////////////
// Socket //
////////////

io.on('connection', function(socket) {
	console.log('A user connected');

	socket.on('btnClick', function(msg) {
		console.log(msg);
		playSound();
	});

	socket.on('disconnect', function() {
		console.log('user disconnected');
		stopSound();
	})
});

http.listen(1337, function() {
	console.log('Listening on port 1337');
});

////////////////////
// Util functions //
////////////////////


function playSound() {
	var fs = require('fs');
	var lame = require('lame');
	var Speaker = require('speaker');
	 
	stream = fs.createReadStream('./public/lunch.mp3')
	  .pipe(new lame.Decoder())
	  .on('format', function (format) {
	    this.pipe(new Speaker(format));
	  });
}

function stopSound() {
	if(stream !== undefined) {
		stream.end();
	}
}