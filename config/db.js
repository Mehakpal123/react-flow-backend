const mongoose = require('mongoose');
const config = require('./config');

const { db: { host, port, dbname } } = config;
const connectionString = `mongodb://${host}:${port}/${dbname}`;

mongoose.set('strictQuery', false);
mongoose.connect(connectionString);