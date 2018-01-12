console.log("Running scripts/seedVideos.js");
const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
// This file empties the Books collection and inserts the books below
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/panoptoVideos",
  {
    useMongoClient: true
  }
);
const videoSeed = [
{
  "videoId": "GaeZgIHhXRM",
  "title": "07 12 2017 Activity My Bio Solved",
  "description": "Creating a student Bio HTML page with css styling",
  "url": "https://www.youtube.com/embed/KxQFJd7bQnc",
  "img": "https://i.ytimg.com/vi/MhkGQAoc7bc/default.jpg"
},
{
  "videoId": "KjKQ_mpwebo",
  "title": "08 16 describes JSON format and usage",
   "description": "Creating a student Bio HTML page with css styling",
  "url": "https://www.youtube.com/embed/KjKQ_mpwebo",
  "img": "https://i.ytimg.com/vi/81G9Pr7n2NE/hqdefault.jpg"
},
{
  "videoId": "hGyTfi9fldg",
  "title": "09 18 2017 MERN",
   "description": "Learning Mongo, Express, React and Nodejs",
  "url": "https://www.youtube.com/embed/hGyTfi9fldg",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "CHClXrjzsPA",
  "title": "08 21 2017 Learning Setup A HTTP Server On Local Port 8080",
   "description": "Setup A HTTP Server On Local Port 8080",
  "url": "https://www.youtube.com/embed/CHClXrjzsPA",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "02GaAYJ5hbY",
  "title": "08 21 2017 Activity Cookies Ancillary Learning",
   "description": "Activity Cookies Ancillary Learning",
  "url": "https://www.youtube.com/embed/02GaAYJ5hbY",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "0TSWHb054ZY",
  "title": "08 21 2017 Activity and Explanation Cookies",
   "description": "Activity and Explanation Cookies",
  "url": "https://www.youtube.com/embed/0TSWHb054ZY",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "g8azyh9EIUs",
  "title": "08 21 2017 Learning Cookies",
   "description": "Learning Cookies",
  "url": "https://www.youtube.com/embed/g8azyh9EIUs",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "xE6peGV_HRo",
  "title": "08 21 2017 Activity Local Storage Session Storage Learning",
   "description": "Activity Local Storage Session Storage Learning",
  "url": "https://www.youtube.com/embed/xE6peGV_HRo",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "mc0Io_RSOzs",
  "title": "08 21 2017 Activity Student Sign in Form NO Data Persistence",
   "description": "Activity Student Sign in Form NO Data Persistence",
  "url": "https://www.youtube.com/embed/mc0Io_RSOzs",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "oUoqfYaktpU",
  "title": "08 21 2017 Learning DATA Persistence Local vs Client Side Storage",
   "description": "Learning DATA Persistence Local vs Client Side Storage",
  "url": "https://www.youtube.com/embed/oUoqfYaktpU",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "BVjKUvGclQs",
  "title": "08 21 2017 Activity To Do List NO Data Persistence",
   "description": "Activity To Do List NO Data Persistence",
  "url": "https://www.youtube.com/embed/BVjKUvGclQs",
  "img": ""
},
{
  "videoId": "6F4Fm7BauVY",
  "title": "08 19 2017 Activity NY Times Article Search Explained SOLVED",
   "description": "Activity NY Times Article Search Explained SOLVED",
  "url": "https://www.youtube.com/embed/6F4Fm7BauVY",
  "img": ""
},
{
  "videoId": "jkzhL76wyVk",
  "title": "08 19 2017 Activity Start Stop Giphy GIFs SOLVED",
   "description": "Activity Start Stop Giphy GIFs SOLVED",
  "url": "https://www.youtube.com/embed/jkzhL76wyVk",
  "img": ""
},
{
  "videoId": "0U3k-9zgyM4",
  "title": "08 19 2017 Recap API JSON AJAX Questions",
   "description": "Recap API JSON AJAX Questions",
  "url": "https://www.youtube.com/embed/0U3k-9zgyM4",
  "img": ""
},
{
  "videoId": "JqrN6LCyw5s",
  "title": "08 19 2017 Activity AJAX Giphy Create Dynamic Elements SOLVED",
   "description": "Activity AJAX Giphy Create Dynamic Elements SOLVED",
  "url": "https://www.youtube.com/embed/JqrN6LCyw5s",
  "img": ""
},
{
  "videoId": "81G9Pr7n2NE",
  "title": "08 19 2017 AJAX Push Buttons Get GIFs ",
   "description": "Activity Push Buttons Get GIFs SOLVED",
  "url": "https://www.youtube.com/embed/81G9Pr7n2NE",
  "img": ""
},
{
  "videoId": "jQgEETRa6hI",
  "title": "08 19 2017 AJAX Cat Button",
   "description": "Activity AJAX Cat Button SOLVED",
  "url": "https://www.youtube.com/embed/jQgEETRa6hI",
  "img": ""
},
{
  "videoId": "KjKQ_mpwebo",
  "title": "08 16 2017 Recap JSON",
   "description": "Recap JSON",
  "url": "https://www.youtube.com/embed/KjKQ_mpwebo",
  "img": ""
},
{
  "videoId": "KxQFJd7bQnc",
  "title": "08 16 2017 Recap AJAX Getting Data",
   "description": "Recap AJAX Getting Data",
  "url": "https://www.youtube.com/embed/KxQFJd7bQnc",
  "img": ""
},
{
  "videoId": "3gZkdvmKOUk",
  "title": "08 16 2017 Intro Full Stack Development",
   "description": "Intro Full Stack Development with Recap",
  "url": "https://www.youtube.com/embed/3gZkdvmKOUk",
  "img": ""
}
];
db.Video
  .remove({})
  .then(() => db.Video.collection.insertMany(videoSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });