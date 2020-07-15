const express = require('express');

const app = express();
const User = require('../models/user');

/* GET data from database */
app.get('/data', (req, res) => {
  User.find({}, 'data -_id')
    .then((response) => {
      // eslint-disable-next-line no-underscore-dangle
      res.json(response[0]._doc.data);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
});

module.exports = app;
