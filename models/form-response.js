let mongoose = require('mongoose');

// form response for new users schema
let formResponseSchema = mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: false
  },
  hobbies: {
    type: String,
    required: false
  },
  food: {
    type: String,
    required: false
  },
  sexPos: {
    type: String,
    required: false
  },
  skillRating: {
    type: String,
    required: false
  },
  role: {
    type: String,
    required: false
  },
  comment: {
    type: String,
    required: false
  },
});

// let testSchema =  mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     author: {
//         type: String,
//         required: true
//     },
//     body: {
//         type: String,
//         required: true
//     }
// });

// choose a collection name rather than letting mongoose make a default one for you
module.exports = mongoose.model('formResponse', formResponseSchema, 'formResponses');