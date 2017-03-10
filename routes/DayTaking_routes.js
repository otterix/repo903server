// routes/DayTaking_routes.js
var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
  app.get('/DayTaking/', (req, res) => {
    db.collection('DayTaking').distinct('_id', {}, (err, item) => {
      if (err) {
        res.send({'error':'Error on [DayTaking GET] has occurred'});
      } else {
        res.send(item);
      }
    });
  });
  app.get('/DayTaking/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('DayTaking').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'Error on [DayTaking ID GET] has occurred'});
      } else {
        res.send(item);
      }
    });
  });
  app.post('/DayTaking', (req, res) => {
    const data1 = {
      cashin: req.body.cashin,
      cardin: req.body.cardin,
      expense: req.body.expense,
      date: req.body.date
    };
    db.collection('DayTaking').insert(data1, (err, result) => {
      if (err) {
        res.send({'error':'Error on [DayTaking POST] has occurred'});
      } else {
        res.send(result.ops[0]);
      }
    });
  });
  app.put('/DayTaking/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const data1 = {
      cashin: req.body.cashin,
      cardin: req.body.cardin,
      expense: req.body.expense,
      date: req.body.date
    };
    db.collection('DayTaking').update(details, data1, (err, result) => {
      if (err) {
        res.send({'error':'Error on [DayTaking PUT] has occurred'});
      } else {
        res.send(data1);
      }
    });
  });
  app.delete('/DayTaking/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('DayTaking').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'Error on [DayTaking DELETE] has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      }
    });
  });
};
