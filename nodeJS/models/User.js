const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({

  firstname: {
    type: String,
    required: true,
    trim: true,
  },

  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  company: {
    type: String,
    required: true,
  },

  role: {
    type: Number,
    required: true,
  },

  activatedAccount: {
    type: Boolean,
    required: true,
  }
  
});
module.exports = User = mongoose.model("user", UserSchema);
