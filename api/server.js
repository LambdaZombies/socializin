// const postData = require('./application-data.js');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

const port = process.env.PORT || 3030;
const server = express();

// let token = token;

// const corsOptions = {
//   origin: "*",
//   methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
// };

// Connect to database
const db = require('../config/keys').mongoURI;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Testy:abc123@ds125031.mlab.com:25031/socializin' || "mongodb://localhost/socializin");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// server.use(cors());

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

routes(server);

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
