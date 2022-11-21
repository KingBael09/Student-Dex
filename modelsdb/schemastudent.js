const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  FirstName: {
    type: String,

    minlength: 3,
  },
  LastName: {
    type: String,
    required: true,
    minlength: 3,
  },
  Gender: {
    required: true,
    type: String,
  },
  DOB: {
    type: String,
    required: true,
  },
  YearOfAddmission: {
    required: true,
    type: String,
  },
  Mobile: {
    type: Number,
    required: true,
    min: 10,
  },
  Branch: {
    type: String,
    required: true,
  },
  RollNo: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

const userdetails = new mongoose.model("userdetails", studentSchema);

module.exports = userdetails;
