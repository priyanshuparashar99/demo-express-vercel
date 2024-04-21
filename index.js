// Add Express
const express = require("express");
const request = require("request");
require("dotenv").config();

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

app.get("/quotes/:category?", (req, res) => {
  let category = req.params.category || "amazing";
  request.get(
    {
      url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
      headers: {
        "X-Api-Key": process.env.API_KEY,
      },
    },
    (err, data) => {
      if (err) console.log("Error", err);
      return res.json({
        status: data.statusCode,
        category: category,
        body: JSON.parse(data.body),
      });
    }
  );
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
