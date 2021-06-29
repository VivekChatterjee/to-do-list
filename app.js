const express = require("express");

const React = require("react");

const ejs = require("ejs");

const bodyparser = require("body-parser");

const app = express();
 var items = ["Buy Food","Cook Food", "Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function (req, res) {

    var date = new Date();
    var day = "";

    var options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
 
    var day = date.toLocaleDateString("en-US", options);

    res.render("list", {theDay :day, newListItems : items});
});

app.post("/", function(req,res){
    var item = req.body.newItem;
    items.push(item);
    
    res.redirect("/");
});


app.listen(3000, function () {
    console.log("Server is starting on port 3000");
});