// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/studentdex")
//   .then((e) => {
//     console.log("connection successfully");
//   })
//   .catch((e) => {
//     console.log("failed");
//     console.log(e);
//   });
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://mini-project:WGBFqHB69fKANkfj8dsZSVGrMJcet1v4CvG0oXg1AOInkZCvosFZHUO6WKJA2KwiTWw7yNKwZ8jqACDbeuywRg==@mini-project.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@mini-project@"
  )
  .then(() => {
    console.log("connection successfully");
  })
  .catch((e) => {
    console.log("failed");
  });
