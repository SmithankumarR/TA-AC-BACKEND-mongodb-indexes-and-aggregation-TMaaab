var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, unique: true },
    age: { type: Number, default: 0 },
    gender: { type: String, require: true },
    isActive: { type: Boolean },
    registered: { type: Date },
    eyeColor: { type: String },
    favoriteFruit: [String],
    company: {
      title: { type: String },
      email: { type: String, unique: true },
      phone: { type: Number },
      location: {
        country: { type: String },
        address: { type: String },
      },
    },
    tags: [String],
  },
  { timestamps: true }
);

var User = mongoose.model('User', userSchema);
module.exports = User;
