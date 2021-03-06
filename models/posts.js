var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var Category = require('./categories');

// create a schema
var postSchema = new Schema({
  title:{
    type: String,
    required: 'Title must not be empty',
    unique: true
  },
  body:{
    type: String,
    required: 'Post body must not be empty'
  },
  thumbnail: {
    type: String,
    required: false
  },
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  tags: Array,
  comments: Array
});
postSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });
var Post = mongoose.model('Post', postSchema);

// make this available to our users in our Node applications
module.exports = Post;