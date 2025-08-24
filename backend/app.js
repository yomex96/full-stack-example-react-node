const express = require("express");
const Quote = require("inspirational-quotes");
const app = express();

// bypass CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

// store all quotes from the library
const quotes = [];
for (let i = 0; i < 100; i++) {
  // collect 100 random quotes
  quotes.push(Quote.getQuote());
}

// shuffle array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(quotes);

// track current index
let currentIndex = 0;

// set up the route
app.get("/", (req, res) => {
  const quote = quotes[currentIndex];
  currentIndex = (currentIndex + 1) % quotes.length; // loop around safely
  res.json(quote);
});

// set up the port
const port = process.env.PORT || 5000;

module.exports = app;

// const express = require("express");
// const Quote = require("inspirational-quotes");
// const app = express();

// // bypass CORS
// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// })

// // set up the route
// app.get("/", function(req, res) {
//     const newQuote = Quote.getQuote();
//     res.send(newQuote);
// });

// //
// // set up the port
// let port = process.env.PORT;
// if (port == null || port == "") {
//     port = 5000;
// }

// module.exports = app;
