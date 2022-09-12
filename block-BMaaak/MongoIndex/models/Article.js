var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    title: { type: String, unique: true },
    description: { title: String, minLength: 10, maxLength: 30 },
    tags: [String],
  },
  { timestamps: true }
);
// multiKey index
articleSchema.index({ sports: 1 });

// Text Index
articleSchema.index({ title: 'text' });

var Article = mongoose.model('Article', articleSchema);
module.exports = Article;
