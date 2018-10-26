const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const db = require('./db/wrapper');
const { dbConfig } = require('./configurations');

const connection = db.initializeConnection(dbConfig)

const app = express();

app.use(express.static(__dirname + '/./public/dist/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/users', require('./routes/users'));
app.use('/rooms', require('./routes/rooms'));


app.all("*", (req, res) => {
  res.sendFile(__dirname + "/./public/dist/public/index.html")
});

app.listen(8000, () => {
  console.log("LISTENING AT PORT 8000")
})

