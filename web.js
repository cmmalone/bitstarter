var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

function getString(){
  var data = fs.readFileSync("index.html", "utf8");
  console.log(data);
  return data;  
};

app.get('/', function(request, response) {
//  var buffer = getString();
//  console.log(buffer );
  var str = getString();
  response.send(str );
  console.log( str );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


