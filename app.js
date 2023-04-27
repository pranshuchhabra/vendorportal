const express = require("express");
const port = process.env.PORT || 3000;
const path = require("path");
const fs = require("fs");
const app = express();


app.set("views", path.join("views"));
app.set("view engine", "ejs");


app.use("/static", express.static(path.join(__dirname, "public")));



app.get('/',(req,res) => {
    res.render("main");
})



app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
  
