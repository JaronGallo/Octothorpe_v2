import axios from "axios";
console.log("running client/src/utils/API.js");
console.log("Calls are made to functions:getVideos, getVideo,deleteVideo and saveVideo");
export default {
  // Gets all books
  getVideos: function() {
    return axios.get("/api/videos");
  },
  // Gets the book with the given id
  getVideo: function(id) {
    return axios.get("/api/videos/" + id);
  },
  // Deletes the book with the given id
  deleteVideo: function(id) {
    return axios.delete("/api/videos/" + id);
  },
  // Saves a book to the database
  saveVideo: function(videoData) {
    return axios.post("/api/videos", videoData);
  }
};