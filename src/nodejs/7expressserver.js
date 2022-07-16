// const express = require("express")
// const app = express();
// app.route('/Node').get(function(req,res)
// {
//     res.send("Tutorial on Node");
// });
// app.route('/Angular').get(function(req,res)
// {
//     res.send("Tutorial on Angular");
// });
// app.get('/',function(req,res){
//     res.send('Welcome to Guru99 Tutorials');
// });
// var server= app.listen(5000,function() {
//     console.log("server started:::")
// });


const express = require("express");
const app = express();
app.route("/venkat").get((req,res) => {
    res.send({"status":343})
})
app.listen(5000, () => {
 console.log("server started");
});



//things.js
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on things.');
});
router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;



//index.js
var express = require('Express');
var app = express();

var things = require('./things.js');

//both index.js and things.js should be in same directory
app.use('/things', things);

app.listen(3000);