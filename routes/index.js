const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/asylumdb');
let db = mongoose.connection;

// Check connection
db.once('open', function () {
  console.log('Connected to MongoDB')
});

// Check for DB errors
db.on('error', function (err) {
  console.log(err);
});

// Bring in models
let FormResponse = require('../models/form-response');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

/* GET forms list page */
router.get('/forms-list', function (req, res) {
  FormResponse.find({}, function (err, formResponses) {
    if (err) {
      console.log(err);
    } else {
      res.render('forms-list', {
        title: 'Form Responses',
        formResponses: formResponses
      });
    }
  });
});

/* GET form page */
router.get('/form', function (req, res) {
  res.render('form');
});

/* POST form page on form submit */
router.post('/form', function (req, res) {
  console.log('Submitted');
  let formResponse = new FormResponse();
  formResponse.name = req.body.name;
  formResponse.age = req.body.age;
  formResponse.hobbies = req.body.hobbies;
  formResponse.food = req.body.food;
  formResponse.sexPos = req.body.sexPos;
  formResponse.skillRating = req.body.skillRating;
  formResponse.role = req.body.role;
  formResponse.comment = req.body.comment;
  formResponse.save(function (err) {
    if (err) {
      console.log(err);
      return;
    } else {
      res.redirect('/forms-list');
    }
  })
});

module.exports = router;
