console.log("Running models/videos.js- Mongoose Schema const");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const videoSchema = new Schema({
   videoId: 			{ type: String, required: true },
   title: 				{ type: String, required: true },
   description: 	 String,
   url: 				  { type: String, required: true },
   img: 				  { type: String, required: true }
});
const Video = mongoose.model("Video", videoSchema);
module.exports = Video;