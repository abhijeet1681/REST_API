var express = require('express'),
bodyParser = require('body-parser'),
app = express(),
service = require('./service.js');
app.use(bodyParser.json());
// parses incoming requests with JSON payloads
app.use(bodyParser.urlencoded({
extended: true
})); // parses incoming requests with URL-encoded payloads
app.use(express.static('../public')); // serves static assets such as HTML files, images, and so on.
service.attachService(app);
app.listen(3000);
console.log("server at http://localhost:3000")