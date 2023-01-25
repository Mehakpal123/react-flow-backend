const express = require('express');
const config = require('./config/config');
const app = express();
const bodyParser = require('body-parser');

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Add headers before the routes are defined
app.use(function (req, res, next) {

	// Websites allowed to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

	// Request methods allowed
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Content type header settting
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, X-Requested-With', 'Set-Cookie')
	res.setHeader('Access-Control-Allow-Credentials', 'true')

	// Pass to next layer of middleware
	next();
});

// db
require('./config/db');

// routes
require('./Routes/articleRoutes')(app);
require('./Routes/userRoutes')(app);

app.listen(config.app.port);