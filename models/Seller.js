const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator1 = require("validator");

const sellerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator1.isEmail, "Please Enter a valid Email"],
  },
  contact: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    minlength:[8,"Password should be greator than 8 letters"],
  },
  avatar: {
    type: String,
  },
  address: {
    firstLine: {
      type: String,
    },
    landmark: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    pin: {
      type: Number,
      required: true,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
  typeofuser: {
    type: String,
    required: true,
  },
});

module.exports = Seller = mongoose.model("seller", sellerSchema);