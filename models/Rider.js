const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("aadhaar-validator")
const validator1 = require("validator")

const riderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    validate: [validator1.isEmail, "Please Enter a valid Email"],
  },
  contact: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength:[8,"Password should be greator than 8 letters"],
  },
  avatar: {
    type: String,
  },
  aadhar: {
    type: String,
    required: true,
    validate: [validator.isValidNumber, "Please Enter a valid Aadhaar Number"],
  },
  dob: {
    type: Date,
    required: true,
  },
  modeOfTransport: {
    typeOfVehicle: {
      type: String,
      required: true,
    },
    regNum: {
      type: String,
      default: "NA",
    },
  },
  available: {
    type: Boolean,
    default: true,
  },
  address: {
    firstLine: {
      type: String,
      required: true,
    },
    landmark: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pin: {
      type: Number,
      required: true,
    },
  },
  pendingAcceptedRequests: [
    {
      orderid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
      },
    },
  ],
  completedAcceptedRequests: [
    {
      orderid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  typeofuser: {
    type: String,
    required: true,
  },
});

module.exports = Rider = mongoose.model("rider", riderSchema);