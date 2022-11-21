const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  FirstName: {
    type: String,

    minlength: 3,
  },
  LastName: {
    type: String,

    minlength: 3,
  },
  Gender: {
    type: String,
  },
  DOB: {
    type: String,
  },
  YearOfAddmission: {
    type: String,
  },
  Mobile: {
    type: Number,

    min: 10,
  },
  Branch: {
    type: String,
  },
  RollNo: {
    type: String,
  },
  Password: {
    type: String,
  },
  Nationality: {
    type: String,
    default: "",
  },
  Mail: {
    type: String,
    default: "",
  },
  City: {
    type: String,
    default: "",
  },
  Attendence: {
    type: String,
    default: "",
  },
  PhysicallyHandicap: {
    type: String,
    default: "",
  },
  Religion: {
    type: String,
    default: "",
  },
  Address: {
    type: String,
    default: "",
  },
  CGPA: {
    type: String,
    default: "",
  },
  CSEM: {
    type: String,
    default: "",
  },
});

const userdetails = new mongoose.model("userdetails", studentSchema);

module.exports = userdetails;
