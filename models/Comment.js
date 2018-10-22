// dependencies
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// comment model setup
var commentSchema = new Schema({
  _articleId: {
    type: Schema.Types.ObjectId,
    ref: "Article"
  },
  date: {
    type: Date,
    default: Date.now
  },
  comment: String
});

// make model
var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;