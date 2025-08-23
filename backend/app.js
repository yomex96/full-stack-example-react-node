import express from "express";
import Quote from "inspirational-quotes";

const app = express();

// bypass CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// set up the route
app.get("/", (req, res) => {
  const newQuote = Quote.getQuote();
  res.send(newQuote);
});

// set up the port
let port = process.env.PORT;
if (!port) {
  port = 5000;
}

// start the server
app.listen(port, () => {
  console.log(`🚀 Server started successfully on port ${port}`);
});
