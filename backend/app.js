const express = require("express");
const Quote = require("inspirational-quotes");
const app = express();

// bypass CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

// set up the route
app.get("/", function(req, res) {
    const newQuote = Quote.getQuote();
    res.send(newQuote);
});

// set up the port
let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}

// start the server
app.listen(port, function() {
    console.log("Server started successfully");
});