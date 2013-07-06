var express = require('express');

var app = express.createServer(express.logger());

var getString(){
  var buffer = new Buffer(16);
  fs.readFile('index.html', function(err, data){
	if(err) throw err;
	buff.write(data);
  };
  return buffer;
}

app.get('/', function(request, response) {
  var buffer = getString();
  response.send(buffer.toString() );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
