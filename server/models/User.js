const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 5,
      max: 20,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
