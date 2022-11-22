const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  Emp_ID: {
    type: String,

    minlength: 3,
  },
  FirstName: {
    type: String,
    required: true,
    minlength: 3,
  },
  LastName: {
    type: String,
    required: true,
  },
  Gender: {
    required: true,
    type: String,
  },

  Mobile: {
    type: Number,
    required: true,
    min: 10,
  },
  Subject: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

const teacherdetails = new mongoose.model("Teacherdetails", teacherSchema);

module.exports = teacherdetails;
