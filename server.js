// Dependencies 

var express = require("express");
var path = require("path");

// set up express app 

var app = express();
var port = 3000;

// express to hand data parsing 
app.use(express.urlencoded({ extended: true }));

// tables (DATA)

var tableInfo = [
    {
        routeName: "Table1",
        name: "Emily",
        Phone: "123-124-1234",
        partySize: 2,
        reservationTime: 7
    },
];

console.log(tables);

// routes (HTML files, tables & new reservation)

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(tableInfo);
});

