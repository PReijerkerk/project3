const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require('./config/passport');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));

//passport
app.use(passport.initialize())
app.use(passport.session())

// Add routes, both API and view
app.use(routes);
app.get("*", function(req, res) {
  console.log("catchall");
  res.sendFile("client/build/index.html", { root: __dirname });
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trophycase");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
