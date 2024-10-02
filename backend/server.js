const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT;
const apiKey = process.env.APIKEY;
const path = require('path');

app.use(express.json());

app.get("/api", async (req,res) => {
  let category = req.query.category;
  let pageSize = req.query.pageSize;
  let page = req.query.page;
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`
    );
    if(response.data.status){
      res.json(response.data);
    }
    else{
      res.status(500).json({ error: "An error occured while checking the status of API."});
    }
  } catch (error) {
    console.log("Error:", error);
    res
      .status(500)
      .json({
        error: "An error occurred while fetching data from the external API.",
      });
  }
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "frontend", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api is running successfully");
  });
}