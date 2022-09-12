var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    questions: { type: Schema.Types.ObjectId, ref: 'Question' },
    answers: { type: Schema.Types.ObjectId, ref: 'Answer' },
    reputation: { type: Number },
  },
  { timestamps: true }
);

var User = mongoose.model('User', userSchema);
module.exports = User;
