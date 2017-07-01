var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var path=require('path');

app.use(bodyParser.urlencoded({ extended: true })); 
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/')));
app.post('/myaction', function(req, res) {
  res.render('index.ejs', {data: req.body.name});
  app.use(express.static(path.join(__dirname, '/redirect.html')));
  app.post('/myaction1', function(req, res) {
  res.render('redirect.ejs', {data: req.body.message});
 });
});

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});