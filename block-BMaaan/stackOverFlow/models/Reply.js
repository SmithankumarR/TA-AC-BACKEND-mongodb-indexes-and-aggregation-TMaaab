var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var replySchema = new Schema(
  {
    title: { type: String, required: true },
    upVotes: { type: Number, default: 0 },
    downVotes: { type: Number, default: 0 },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    repliedOn: { type: Schema.Types.ObjectId, ref: 'Answer', required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Reply', replySchema);
