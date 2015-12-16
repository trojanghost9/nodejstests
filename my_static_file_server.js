// Using Express as a framework for a nodejs app
// Requires npm install express -run this from the app dir


var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080);