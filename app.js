var express = require('express');
var dd = require('express-favicon');
var http = require('http').Server(app);
var path = require('path');
var bodyParser = require('body-parser');
var Sequelize = require("sequelize");

var routes = require('./routes');
var models = require('./models');
var about = require('./routes/about');
var app = express();
// all environments
app.set('port', process.env.PORT || 3020);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/users', routes.list);
//app.post('/user', routes.AddUser);
app.get('/about', about.about); 

models.sequelize.sync().then(function() {
app.listen(app.get('port'),function(){
console.log('started app');
});
});


