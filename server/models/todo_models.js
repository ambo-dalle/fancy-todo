var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var todoSchema = new Schema({
  title: String,
  description: String,
  status: Boolean,
  date: Date,
  created: Date,
  updated: Date
});
var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

var d = new Date();
var n = new Date().toISOString();
