const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB

if (process.env.MONGODB_URI){
	mongoose.connect(process.env.MONGODB_URI);
} else {
	mongoose.connect('mongodb://localhost/panoptoVideos');
}

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/panoptoVideos",
//   {
//     useMongoClient: true
//   }
// );

var db = mongoose.connection;

db.on("error", function(err) {
	console.log("mongoose err ", err );
});

db.once("open", function() {
	console.log('mongoose is connected');
});
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});