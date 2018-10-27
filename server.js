// const postData = require('./application-data.js');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./api/routes/routes");

const port = process.env.PORT || 3030;
const server = express();

// let token = token;

const corsOptions = {
  origin: "*",
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// Connect to MongoDB & Database Config
const db = require("./config/keys").mongoURI;

mongoose.Promise = global.Promise;
mongoose
  // .connect("mongodb://Testy:abc123@ds125031.mlab.com:25031/socializin")
  // .connect("mongodb://localhost:27017/socializin")
  .connect("mongodb://Testy:abc123@ds231643.mlab.com:31643/socializin")
  .then(function(db) {
    console.log("All your dbs are belong to us!");
    server.listen(port, function() {
      console.log("server running on port " + port);
    });
  })
  .catch(function(err) {
    console.log("DB connection failed..", err.message);
  });
server.use(express.static(path.resolve(__dirname, "./client/build")));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(cors());

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Routes
routes(server);
