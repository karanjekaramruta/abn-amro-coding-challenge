var express = require('express');
const app = express();
const User = require("../models/user");


/* GET all data from users db. */
app.get('/data', function(req, res, next) {
  
  User.find({}, 'data -_id')
      .then((response)=>{
        res.json(response[0]._doc.data)
      })
      .catch(err=>{
        console.log(err);
      })
});

module.exports = app;
