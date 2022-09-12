var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var questionSchema = new Schema(
  {
    title: { type: String, required: true },
    upVotes: { type: Number, default: 0 },
    downVotes: { type: Number, default: 0 },
    tags: [{ type: String }],
    views: [{ type: Number, default: 0 }],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
    replies: [{ type: Schema.Types.ObjectId, ref: 'Reply' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Question', questionSchema);
