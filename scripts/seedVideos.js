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
  "videoId": "GAeZgIHhXRM",
  "title": "07 12 2017 Activity My Bio Solved",
  "description": "Activity My Bio Solved",
  "url": "https://www.youtube.com/embed/GAeZgIHhXRM",
  "img": "https://i.ytimg.com/vi/81G9Pr7n2NE/hqdefault.jpg"
},
{
  "videoId": "UMGEetbGPIs",
  "title": "07 12 2017 Learning Create Clone Repository",
  "description": "Learning Create Clone Repository",
  "url": "https://www.youtube.com/embed/UMGEetbGPIs",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "HSuZPeAf23E",
  "title": "07 12 2017 Learning CreateFile Add Commit Push GIT",
  "description": "Learning CreateFile Add Commit Push GIT",
  "url": "https://www.youtube.com/embed/HSuZPeAf23E",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "4aLLOWMoqgk",
  "title": "07 12 2017 Learning CSS Stylin",
  "description": "Learning CSS Stylin",
  "url": "https://www.youtube.com/embed/4aLLOWMoqgk",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "lEu4W3sdemA",
  "title": "07 12 2017 Learning HTML Tags Common Uncommon",
  "description": "Learning HTML Tags Common Uncommon",
  "url": "https://www.youtube.com/embed/lEu4W3sdemA",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "zyGmQKBce_s",
  "title": "07 12 2017 Learning What is Git",
  "description": "Learning What is Git",
  "url": "https://www.youtube.com/embed/zyGmQKBce_s",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "rnDPoCb5KhY",
  "title": "07 12 2017 Learning What Is GitHub",
  "description": "Learning What Is GitHub",
  "url": "https://www.youtube.com/embed/rnDPoCb5KhY",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "NxN0teMp3gQ",
  "title": "07 17 2017 Learning Chrome Developer Tools",
  "description": "Learning Chrome Developer Tools",
  "url": "https://www.youtube.com/embed/NxN0teMp3gQ",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "utEmbnauPYQ",
  "title": "07 17 2017 Learning Classes vs Divs",
  "description": "Learning Classes vs Divs",
  "url": "https://www.youtube.com/embed/utEmbnauPYQ",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "ik3RJbmU1nU",
  "title": "07 17 2017 Learning Deploying Pages To GitHub",
  "description": "Learning Deploying Pages To GitHub",
  "url": "https://www.youtube.com/embed/ik3RJbmU1nU",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "EijzOLp9mbI",
  "title": "07 17 2017 Learning Divs Navs Sections",
  "description": "Learning Divs Navs Sections",
  "url": "https://www.youtube.com/embed/EijzOLp9mbI",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "CgJFwBcJaSA",
  "title": "07 17 2017 Learning CSS Resets",
  "description": "Learning CSS Resets",
  "url": "https://www.youtube.com/embed/CgJFwBcJaSA",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "8D6I8jqLX0I",
  "title": "07 17 2017 Learning GitLab Class Materials Explanation",
  "description": "Learning GitLab Class Materials Explanation",
  "url": "https://www.youtube.com/embed/8D6I8jqLX0I",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "ZQY4fZ_K1Hs",
  "title": "07 19 2017 Advice Bootcamp Helpers",
  "description": "Advice Bootcamp Helpers",
  "url": "https://www.youtube.com/embed/ZQY4fZ_K1Hs",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "8sA164nO-5U",
  "title": "07 19 2017 Learning CSS Typography",
  "description": "Learning CSS Typography",
  "url": "https://www.youtube.com/embed/8sA164nO-5U",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "j59ujU-oFiM",
  "title": "07 19 2017 Learning Google Fonts",
  "description": "Learning Google Fonts",
  "url": "https://www.youtube.com/embed/j59ujU-oFiM",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "Ig3b_6bgY-A",
  "title": "07 22 2017 Advice Importance of Sketches",
  "description": "Advice Importance of Sketches",
  "url": "https://www.youtube.com/embed/Ig3b_6bgY-A",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "zkIW4U4FIY8",
  "title": "07 22 2017 Learning Boostrap Grid Design",
  "description": "Learning Boostrap Grid Design",
  "url": "https://www.youtube.com/embed/zkIW4U4FIY8",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "OcdRrr2Pxpc",
  "title": "07 22 2017 Learning Bootstrap Coding Grids",
  "description": "Learning Bootstrap Coding Grids",
  "url": "https://www.youtube.com/embed/OcdRrr2Pxpc",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "Fg4z2TwaAz4",
  "title": "07 22 2017 Learning Bootstrap Common Questions Answers",
  "description": "Learning Bootstrap Common Questions Answers",
  "url": "https://www.youtube.com/embed/Fg4z2TwaAz4",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "48H6T4tOaMg",
  "title": "07 22 2017 Learning Bootstrap Intro",
  "description": "Learning Bootstrap Intro",
  "url": "https://www.youtube.com/embed/48H6T4tOaMg",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "ImrsKf109Rc",
  "title": "07 22 2017 Learning Bootstrap Layouts Activity",
  "description": "earning Bootstrap Layouts Activity",
  "url": "https://www.youtube.com/embed/ImrsKf109Rc",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "0FDqwsxXzaw",
  "title": "07 22 2017 Learning Bootstrap Rows Columns",
  "description": "Learning Bootstrap Rows Columns",
  "url": "https://www.youtube.com/embed/0FDqwsxXzaw",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "GS165RPpdHA",
  "title": "07 22 2017 Learning Responsive Design Media Queries",
  "description": "Learning Responsive Design Media Queries",
  "url": "https://www.youtube.com/embed/GS165RPpdHA",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "rEnC2UHWIa4",
  "title": "07 22 2017 Learning Responsive Design Viewports",
  "description": "Learning Responsive Design Viewports",
  "url": "https://www.youtube.com/embed/rEnC2UHWIa4",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "LLYjYrDoxr0",
  "title": "07 24 2017 Activity Javascript Variables Alerts",
  "description": "Activity Javascript Variables Alerts",
  "url": "https://www.youtube.com/embed/LLYjYrDoxr0",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "Vw8iyosh648",
  "title": "07 24 2017 Advice Bootstrap Bootswatch Themes",
  "description": "Advice Bootstrap Bootswatch Themes",
  "url": "https://www.youtube.com/embed/Vw8iyosh648",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "0ek8mkFceEo",
  "title": "07 24 2017 Learning Javascript Alerts Prompts Confirms",
  "description": "Learning Javascript Alerts Prompts Confirms",
  "url": "https://www.youtube.com/embed/0ek8mkFceEo",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "cs_MJqBGTn0",
  "title": "07 24 2017 Learning Javascript Document Write",
  "description": "Learning Javascript Document Write",
  "url": "https://www.youtube.com/embed/cs_MJqBGTn0",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "9WeUib5aQKU",
  "title": "07 24 2017 Learning Javascript If Else Statements",
  "description": "Learning Javascript If Else Statements",
  "url": "https://www.youtube.com/embed/9WeUib5aQKU",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "5Ry5NX8OD1E",
  "title": "07 24 2017 Learning Javascript Logs Prints Alerts",
  "description": "Learning Javascript Logs Prints Alerts",
  "url": "https://www.youtube.com/embed/5Ry5NX8OD1E",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "JvxyLgyiYQg",
  "title": "07 24 2017 Learning Javascript Variables",
  "description": "Learning Javascript Variables",
  "url": "https://www.youtube.com/embed/JvxyLgyiYQg",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "JhcN732PhOk",
  "title": "07 26 2017 Activity Rock Paper Scissors Help Tips",
  "description": "Activity Rock Paper Scissors Help Tips",
  "url": "https://www.youtube.com/embed/JhcN732PhOk",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "bBubHcW8vD0",
  "title": "07 26 2017 Learning Javascript Events",
  "description": "Learning Javascript Events",
  "url": "https://www.youtube.com/embed/bBubHcW8vD0",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "YgnayaNxAto",
  "title": "07 26 2017 Learning Javascript For Loops",
  "description": "Learning Javascript For Loops",
  "url": "https://www.youtube.com/embed/YgnayaNxAto",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "x0naT0GORKE",
  "title": "07 26 2017 Learning Javascript Pseudocode",
  "description": "Learning Javascript Pseudocode",
  "url": "https://www.youtube.com/embed/x0naT0GORKE",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "MuXdZT6_Ppk",
  "title": "07 26 2017 Learning Javascript String To Uppercase",
  "description": "Learning Javascript String To Uppercase",
  "url": "https://www.youtube.com/embed/MuXdZT6_Ppk",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "0MRhnXa_t24",
  "title": "07 31 2017 Acitivity jQuery OnClick Sandwiches SOLVED",
  "description": "Acitivity jQuery OnClick Sandwiches SOLVED",
  "url": "https://www.youtube.com/embed/0MRhnXa_t24",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "7DeFomBW_CA",
  "title": "07 31 2017 Activity jQuery Random Number Generator SOLVED",
  "description": "Activity jQuery Random Number Generator SOLVED",
  "url": "https://www.youtube.com/embed/7DeFomBW_CA",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "FtLeQTFA8V8",
  "title": "07 31 2017 Activity DOM Manipulation Javascript Solved",
  "description": "Activity DOM Manipulation Javascript Solved",
  "url": "https://www.youtube.com/embed/FtLeQTFA8V8",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "bUdSKeUXiQM",
  "title": "07 31 2017 Activity Jquery DOM Manip SOLVED",
  "description": "Activity Jquery DOM Manip SOLVED",
  "url": "https://www.youtube.com/embed/bUdSKeUXiQM",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "yAY1LMVD6mM",
  "title": "07 31 2017 Activity jQuery Lottery Number Generator UNSOLVED",
  "description": "Activity jQuery Lottery Number Generator UNSOLVED",
  "url": "https://www.youtube.com/embed/yAY1LMVD6mM",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "Sl56lD-gmnA",
  "title": "07 31 2017 Advice Coding Helpers",
  "description": "Advice Coding Helpers",
  "url": "https://www.youtube.com/embed/Sl56lD-gmnA",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "Yun1MjFWc0E",
  "title": "07 31 2017 Learning DOM Manipulation With Javascript",
  "description": "Learning DOM Manipulation With Javascript",
  "url": "https://www.youtube.com/embed/Yun1MjFWc0E",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "_v9lVo4huc4",
  "title": "07 31 2017 Learning Intro To jQuery",
  "description": "Learning Intro To jQuery",
  "url": "https://www.youtube.com/embed/_v9lVo4huc4",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "tIw3EZmfUBo",
  "title": "07 31 2017 Learning jQuery OnClick Events",
  "description": "Learning jQuery OnClick Events",
  "url": "https://www.youtube.com/embed/tIw3EZmfUBo",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "y9NzcVMSM5M",
  "title": "08 02 2017 Activity Crystal Collector SOLVED",
  "description": "Activity Crystal Collector SOLVED",
  "url": "https://www.youtube.com/embed/y9NzcVMSM5M",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "a0vbqrl-KnA",
  "title": "08 02 2017 Activity Scope Three SOLVED",
  "description": "Activity Scope Three SOLVED",
  "url": "https://www.youtube.com/embed/a0vbqrl-KnA",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "c1x9FoKerLs",
  "title": "08 02 2017 Activity Scope Two SOLVED",
  "description": "Activity Scope Two SOLVED",
  "url": "https://www.youtube.com/embed/c1x9FoKerLs",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "ZqgrpDtQEFg",
  "title": "08 02 2017 Activity The Fridge Game SOLVED",
  "description": "Activity The Fridge Game SOLVED",
  "url": "https://www.youtube.com/embed/ZqgrpDtQEFg",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "Emkgfneu8C8",
  "title": "08 02 2017 Learning AND Activity Captain Planet jQuery Animation Features",
  "description": "Learning AND Activity Captain Planet jQuery Animation Features",
  "url": "https://www.youtube.com/embed/Emkgfneu8C8",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "CIWBEjQtc5k",
  "title": "08 02 2017 Learning jQuery Quick Recap",
  "description": "Learning jQuery Quick Recap",
  "url": "https://www.youtube.com/embed/CIWBEjQtc5k",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "O_Nmg2sft2E",
  "title": "08 02 2017 Learning Lexical Scope",
  "description": "Learning Lexical Scope",
  "url": "https://www.youtube.com/embed/O_Nmg2sft2E",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "2rDZe1n17vM",
  "title": "08 05 2017 Activity Cobweb SOLVED",
  "description": "Activity Cobweb SOLVED",
  "url": "https://www.youtube.com/embed/2rDZe1n17vM",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "_1dBAUqse_o",
  "title": "08 05 2017 Activity Javascript Scope Quiz SOLVED",
  "description": "Activity Javascript Scope Quiz SOLVED",
  "url": "https://www.youtube.com/embed/_1dBAUqse_o",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "VrTBWBbS5MA",
  "title": "08 05 2017 Activity Jquery Calculator SOLVED",
  "description": "Activity Jquery Calculator SOLVED",
  "url": "https://www.youtube.com/embed/VrTBWBbS5MA",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "yPsTRzLycnA",
  "title": "08 05 2017 Activity This SOLVED",
  "description": "Activity This SOLVED",
  "url": "https://www.youtube.com/embed/yPsTRzLycnA",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "Bab1f1pmybE",
  "title": "08 07 2017 Recap HTML CSS Bootstrap",
  "description": "Recap HTML CSS Bootstrap",
  "url": "https://www.youtube.com/embed/Bab1f1pmybE",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "2KvPssYO5WQ",
  "title": "08 07 2017 Recap Javascript",
  "description": "Recap Javascript",
  "url": "https://www.youtube.com/embed/2KvPssYO5WQ",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "WIKl9VG1MvU",
  "title": "08 07 2017 Recap jQuery",
  "description": "Recap jQuery",
  "url": "https://www.youtube.com/embed/WIKl9VG1MvU",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "MXkF44pKL9Q",
  "title": "08 07 2017 Recap Questions Answers",
  "description": "Recap Questions Answers",
  "url": "https://www.youtube.com/embed/MXkF44pKL9Q",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "/XWyBk4OuiUU",
  "title": "08 09 2017 Activity jQuery Slide Show SOLVED",
  "description": "Activity jQuery Slide Show SOLVED",
  "url": "https://www.youtube.com/embed//XWyBk4OuiUU",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "gtWhAcoJd_E",
  "title": "08 09 2017 Activity jQuery Stopwatch SOLVED",
  "description": "Activity jQuery Stopwatch SOLVED",
  "url": "https://www.youtube.com/embed/gtWhAcoJd_E",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "gf2KrvQSfdw",
  "title": "08 09 2017 Activity jQuery Timers Coin Flip SOLVED",
  "description": "Activity jQuery Timers Coin Flip SOLVED",
  "url": "https://www.youtube.com/embed/gf2KrvQSfdw",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "ffwJYQH54-U",
  "title": "08 09 2017 Activity setTimeout setInterval",
  "description": "Activity setTimeout setInterval",
  "url": "https://www.youtube.com/embed/ffwJYQH54-U",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "bJUgCVCDd7o",
  "title": "08 09 2017 Learning Javascript setTimeouts",
  "description": "Learning Javascript setTimeouts",
  "url": "https://www.youtube.com/embed/bJUgCVCDd7o",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "BqbYU4hcGko",
  "title": "08 14 2017 Tools Install JSON Viewer",
  "description": "Tools Install JSON Viewer",
  "url": "https://www.youtube.com/embed/BqbYU4hcGko",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "17QTHjteM3Y",
  "title": "08 14 2017 Learning JSON Activity Customer JSON Object SOLVED",
  "description": "Learning JSON Activity Customer JSON Object SOLVED",
  "url": "https://www.youtube.com/embed/17QTHjteM3Y",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "WU0k4PZFzLY",
  "title": "08 14 2017 Learning AJAX Calls",
  "description": "Learning AJAX Calls",
  "url": "https://www.youtube.com/embed/WU0k4PZFzLY",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "pCt4FrPxX8Q",
  "title": "08 14 2017 Activity AJAX to HTML SOLVED",
  "description": "Activity AJAX to HTML SOLVED",
  "url": "https://www.youtube.com/embed/pCt4FrPxX8Q",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "UbTfQoBTi48",
  "title": "08 14 2017 Activity JSON What Is An API",
  "description": "Activity JSON What Is An API",
  "url": "https://www.youtube.com/embed/UbTfQoBTi48",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "Q8Y3AMcIKvk",
  "title": "08 14 2017 Learning Giphy API",
  "description": "Learning Giphy API",
  "url": "https://www.youtube.com/embed/Q8Y3AMcIKvk",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "j6EuS2gWDus",
  "title": "08 14 2017 Activity OMDb Open Movie Database Tutorial",
  "description": "Activity OMDb Open Movie Database Tutorial",
  "url": "https://www.youtube.com/embed/j6EuS2gWDus",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "Xa1eeVagT0I",
  "title": "08 14 2017 Learning NY Times Scraper API",
  "description": "Learning NY Times Scraper API",
  "url": "https://www.youtube.com/embed/Xa1eeVagT0I",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "-gMfEo14ZyY",
  "title": "08 16 2017 Learning API Recap",
  "description": "Learning API Recap",
  "url": "https://www.youtube.com/embed/-gMfEo14ZyY",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "vR5TXTv4c5A",
  "title": "08 16 2017 Activity Dynamic Movie Button Layout SOLVED",
  "description": "Activity Dynamic Movie Button Layout SOLVED",
  "url": "https://www.youtube.com/embed/vR5TXTv4c5A",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "TZ9s1HaBNAM",
  "title": "08 16 2017 Activity Log Movie JSON Click JSON Data SOLVED",
  "description": "Activity Log Movie JSON Click JSON Data SOLVED",
  "url": "https://www.youtube.com/embed/TZ9s1HaBNAM",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "IHnvJu1myFY",
  "title": "08 16 2017 Activity Movie App Demo SOLVED",
  "description": "Activity Movie App Demo SOLVED",
  "url": "https://www.youtube.com/embed/IHnvJu1myFY",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "sssp5ycywfs",
  "title": "08 16 2017 Activity Movie Click Search App SOLVED",
  "description": "Activity Movie Click Search App SOLVED",
  "url": "https://www.youtube.com/embed/sssp5ycywfs",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "vGF5688vP1c",
  "title": "08 16 2017 Activity WeatherMap API SOLVED",
  "description": "Activity WeatherMap API SOLVED",
  "url": "https://www.youtube.com/embed/vGF5688vP1c",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "3gZkdvmKOUk",
  "title": "08 16 2017 Intro Full Stack Development with Recap",
  "description": "Intro Full Stack Development with Recap",
  "url": "https://www.youtube.com/embed/3gZkdvmKOUk",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "KxQFJd7bQnc",
  "title": "08 16 2017 Recap AJAX Getting Data",
  "description": "Recap AJAX Getting Data",
  "url": "https://www.youtube.com/embed/KxQFJd7bQnc",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "KjKQ_mpwebo",
  "title": "08 16 2017 Recap JSON",
  "description": "Recap JSON",
  "url": "https://www.youtube.com/embed/KjKQ_mpwebo",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "jQgEETRa6hI",
  "title": "08 19 2017 Activity AJAX Cat Button SOLVED",
  "description": "Activity AJAX Cat Button SOLVED",
  "url": "https://www.youtube.com/embed/jQgEETRa6hI",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "81G9Pr7n2NE",
  "title": "08 19 2017 Activity Push Buttons Get GIFs SOLVED",
  "description": "Activity Push Buttons Get GIFs SOLVED",
  "url": "https://www.youtube.com/embed/81G9Pr7n2NE",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "JqrN6LCyw5s",
  "title": "08 19 2017 Activity AJAX Giphy Create Dynamic Elements SOLVED",
  "description": "Activity AJAX Giphy Create Dynamic Elements SOLVED",
  "url": "https://www.youtube.com/embed/JqrN6LCyw5s",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "0U3k-9zgyM4",
  "title": "08 19 2017 Recap API JSON AJAX Questions",
  "description": "Recap API JSON AJAX Questions",
  "url": "https://www.youtube.com/embed/0U3k-9zgyM4",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "jkzhL76wyVk",
  "title": "08 19 2017 Activity Start Stop Giphy GIFs SOLVED",
  "description": "Activity Start Stop Giphy GIFs SOLVED",
  "url": "https://www.youtube.com/embed/jkzhL76wyVk",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "6F4Fm7BauVY",
  "title": "08 19 2017 Activity NY Times Article Search Explained SOLVED",
  "description": "Activity NY Times Article Search Explained SOLVED",
  "url": "https://www.youtube.com/embed/6F4Fm7BauVY",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "BVjKUvGclQs",
  "title": "08 21 2017 Activity To Do List NO Data Persistence",
  "description": "Activity To Do List NO Data Persistence",
  "url": "https://www.youtube.com/embed/BVjKUvGclQs",
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
  "videoId": "mc0Io_RSOzs",
  "title": "08 21 2017 Activity Student Sign in Form NO Data Persistence",
  "description": "Activity Student Sign in Form NO Data Persistence",
  "url": "https://www.youtube.com/embed/mc0Io_RSOzs",
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
  "videoId": "g8azyh9EIUs",
  "title": "08 21 2017 Learning Cookies",
  "description": "Learning Cookies",
  "url": "https://www.youtube.com/embed/g8azyh9EIUs",
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
  "videoId": "02GaAYJ5hbY",
  "title": "08 21 2017 Activity Cookies Ancillary Learning",
  "description": "Activity Cookies Ancillary Learning",
  "url": "https://www.youtube.com/embed/02GaAYJ5hbY",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "CHClXrjzsPA",
  "title": "08 21 2017 Learning Setup A HTTP Server On Local Port 8080",
  "description": "Learning Setup A HTTP Server On Local Port 8080",
  "url": "https://www.youtube.com/embed/CHClXrjzsPA",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "kRZIxJubInY",
  "title": "08 23 2017 Recap Data Persistence Explained",
  "description": "Recap Data Persistence Explained",
  "url": "https://www.youtube.com/embed/kRZIxJubInY",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "sG12c5MLLM0",
  "title": "08 23 2017 Learning Firebase with Click Counter Activity",
  "description": "Learning Firebase with Click Counter Activity",
  "url": "https://www.youtube.com/embed/sG12c5MLLM0",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "2yxxtJOWmpU",
  "title": "08 23 2017 Activity Firebase Student Sign Up Form with Data Collection",
  "description": "Activity Firebase Student Sign Up Form with Data Collection",
  "url": "https://www.youtube.com/embed/2yxxtJOWmpU",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "LhNw3TJkuEk",
  "title": "08 23 2017 Activity Coders Bay eBay Firebase Bidding App SOLVED",
  "description": "Activity Coders Bay eBay Firebase Bidding App SOLVED",
  "url": "https://www.youtube.com/embed/LhNw3TJkuEk",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "kW7LilR371I",
  "title": "08 23 2017 Activity Intro To Presence Firebase",
  "description": "Activity Intro To Presence Firebase",
  "url": "https://www.youtube.com/embed/kW7LilR371I",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "ITw0d3LurRM",
  "title": "08 29 2017 Advice Project Week 08 29 to 09 16",
  "description": "Advice Project Week 08 29 to 09 16",
  "url": "https://www.youtube.com/embed/ITw0d3LurRM",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "Ose9-RrU4MY",
  "title": "09 18 2017 Learning MERN Node Explanation",
  "description": "Learning MERN Node Explanation",
  "url": "https://www.youtube.com/embed/Ose9-RrU4MY",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "JvwQrkYggOk",
  "title": "09 18 2017 Learning Server Side Code",
  "description": "Learning Server Side Code",
  "url": "https://www.youtube.com/embed/JvwQrkYggOk",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "FFd9wUt5Smc",
  "title": "09 18 2017 Learning Node JS with Synchronous Threading",
  "description": "Learning Node JS with Synchronous Threading",
  "url": "https://www.youtube.com/embed/FFd9wUt5Smc",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "Srhm65YiBuU",
  "title": "09 18 2017 Learning Node js process argv Arguments",
  "description": "Learning Node js process argv Arguments",
  "url": "https://www.youtube.com/embed/Srhm65YiBuU",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "Mwn1xji4Jh8",
  "title": "09 18 2017 Learning Node JS Exports Module with Require Statement",
  "description": "Learning Node JS Exports Module with Require Statement",
  "url": "https://www.youtube.com/embed/Mwn1xji4Jh8",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "k4ZwvpIXLak",
  "title": "09 18 2017 Activity Run Node then SOLVED Siracha Activity",
  "description": "Activity Run Node then SOLVED Siracha Activity",
  "url": "https://www.youtube.com/embed/k4ZwvpIXLak",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "cV312ZdlDuU",
  "title": "09 18 2017 Activity Node js Math Problem SOLVED",
  "description": "Activity Node js Math Problem SOLVED",
  "url": "https://www.youtube.com/embed/cV312ZdlDuU",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
},
{
  "videoId": "KphoKZfgqmE",
  "title": "09 18 2017 Activity Command Line Calculator SOLVED",
  "description": "Activity Command Line Calculator SOLVED",
  "url": "https://www.youtube.com/embed/KphoKZfgqmE",
  "img": "https://i.ytimg.com/vi/hGyTfi9fldg/hqdefault.jpg"
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