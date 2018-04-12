var http = require('http');
var url = require('url');
var fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, htmlpagedata) {	
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write(htmlpagedata);
	  res.end(); //end the response
  });
}).listen(8080); //the server object listens on port 8080