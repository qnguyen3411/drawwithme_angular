require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const db = require('./db/wrapper');
const { logErrors, clientErrorHandler } = require('./errorhandler');

console.log(process.pid);
const connection = db.initializeConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

const app = express();

app.use(express.static(__dirname + '/./public/dist/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/users', require('./routes/users'));
app.use('/rooms', require('./routes/rooms'));
app.use(logErrors)
app.use(clientErrorHandler)


app.all("*", (req, res) => {
  res.sendFile(__dirname + "/./public/dist/public/index.html")
});

app.listen(8000, () => {
  console.log("LISTENING AT PORT 8000")
})

