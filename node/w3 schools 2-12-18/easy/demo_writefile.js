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

// create a file
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// open file for writing 
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

// write file
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// append previously created file
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

// replace content of previous file
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

// delete file
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

// rename file
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});