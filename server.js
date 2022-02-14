var express = require('express');

var app = express();

app.get("/", function(req, res){
    res.send("<h1>First Server App created By Suraj Dasarwad</h1>");
});

app.listen(3000);
console.log("server is running on port 3000");