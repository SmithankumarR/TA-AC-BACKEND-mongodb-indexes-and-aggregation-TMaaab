var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var answerSchema = new Schema(
  {
    title: { type: String, required: true },
    upVotes: { type: Number, default: 0 },
    downVotes: { type: Number, default: 0 },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    questionId: { type: Schema.Types.ObjectId, ref: 'Answer', required: true },
    replies: [{ type: Schema.Types.ObjectId, ref: 'Reply' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Answer', answerSchema);
