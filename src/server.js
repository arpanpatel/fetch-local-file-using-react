var express = require("express");
var foo = require('./movie.json');
var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// respond with "hello world" when a GET request is made to the homepage
app.get("/test", function(req, res, next) {
  res.send(foo);
});

app.listen(5000, () => console.log('Example app listening on port 3000!'))