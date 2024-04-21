// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send(" Sujeet's server says, Hello!");
});

app.get("/me", (req, res) => {
  res.json({
    name: "Sujeet Gund",
    currentStatus: "Student",
  });
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
