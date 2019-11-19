var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/routes');

var db = mongoose.connect('mongodb://localhost:27017/swag-shop', { useNewUrlParser: true, useUnifiedTopology: true });

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);

app.listen(3000, function(){
    console.log("Swag Shop API running on port 3000 ...");
});