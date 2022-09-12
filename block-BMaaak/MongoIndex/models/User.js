var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String },
    userName: { type: String, unique: true },
    email: { type: String, unique: true },
    address: {
      city: { type: String },
      state: { type: String, unique: true },
      country: { type: String },
      pin: { type: Number },
    },
  },
  { timestamps: true }
);

// unique index
userSchema.index({ username: 1 }, { email: true });

// compound index
userSchema.index({ country: 1, state: 1 });

var User = mongoose.model('User', userSchema);
module.exports = User;
