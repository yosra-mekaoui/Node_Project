const express = require("express");
const http = require("http");
const mongo = require("mongoose");
const mongoconnection = require("./config/mongoconnection.json");
const bodyParser = require("body-parser");

mongo.connect(mongoconnection.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const StudentRouter = require("./Routes/studentRoutes");
app.use("/", StudentRouter);



const server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server is running.");

});

