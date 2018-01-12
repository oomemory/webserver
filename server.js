var http    = require('http');
var express = require('express');
var path    = require('path');
var fs      = require('fs');

// the server will listen at the following port
var port  = process.env.port || 8080;

// create the server
// version 1: WITHOUT USING express
// --------------------------------------
// http.createServer(function(req, res){
//   // write HTTP headers that will be sent back to the browser
//   res.writeHead(200, {
//     'Content-Type': 'text/html',
//     'Access-Control-Allow-Origin': '*'
//   });
//
//   var read = fs.createReadStream(__dirname + '/index.html');
//   read.pipe(res);
//
// }).listen(port);


// create the server
// version 2: USING express
// --------------------------------------
var server = express();

// GET route
server.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/index.html'));
});

// new route
server.get('/saysomething', function(req, res){
  res.sendFile(path.join(__dirnname, '/something.html'));
});



// fire the server engine
server.listen(port);




// running!
console.log("Server runing at port " + port.toString() );
