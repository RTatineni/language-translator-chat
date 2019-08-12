const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const keys =require("./config/keys") 
const mongoose = require("mongoose");
const passport = require("passport");
const users = require("./routes/users");
require("dotenv")
const app = express();



const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// DB Config
const db = keys.mongoURI

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

app.use("/api", apiRoutes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

  
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
