const express = require("express");
const mongoose = require("mongoose");

// Create the application
const app = express();

// Connect to the database
const mongoDb = process.env.DB_URL;
mongoose.connect(mongoDb);

if (mongoose.connection) {
  console.log("Mongoose connected successfully.");
}

app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT;

// Start the application
app.listen(port, () => console.log(`Server running on port ${port}`));

// Listen for requests
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
