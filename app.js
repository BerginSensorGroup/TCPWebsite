var net = require('net');
var mysql = require('mysql');
var controller = require('./controller.js');

const PORT = process.env.PORT || 3000;
const ADDRESS = '127.0.0.1';
var timer;
var timeout = 5000;

var server = net.createServer(function(c) {

  server.getConnections(function(error, count) {
    if (count == 1) {
      console.log('The server has 1 active connection.');
    } else {
      console.log('The server has ' + count + ' active connections.');
    }
  });

  c.on('connect', function() {
    console.log('client connected');
  });

  c.on('end', function() {
    console.log('client disconnected');
  });

  c.on('data', function(data) {
    var datastring = data.toString();
    console.log('data');
    controller.parse_string(datastring)
  });

  c.on('error', function(err) {

    if (err.code == 'ENOTFOUND') {
      console.log('[ERROR] No devide found at this address.');
    }

    if (err.code == 'ECONNREFUSED') {
      console.log('[ERROR] Connection refused, please check the IP address.');
    }

  });
}).listen(PORT);

console.log("Server is listening on port 3000");
