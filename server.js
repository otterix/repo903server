// server.js
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');

const app            = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', (process.env.PORT || 8000));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./routes')(app, database);
  app.listen(app.get('port'), () => {
    console.log('We are live on ' + app.get('port'));
  });
});
