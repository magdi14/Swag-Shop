var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var routes = require('./routes/routes');
var db = require('./database/db');    //initiating the connection to db

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();       //for CORS issue
  });

app.use('/', routes);

app.listen(3008, function(){
    console.log("Swag Shop API running on port 3008 ...");
});