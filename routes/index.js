// routes/index.js
const Route1 = require('./DayTaking_routes');
module.exports = function(app, db) {
  Route1(app, db);
  // Other route groups could go here, in the future
};
