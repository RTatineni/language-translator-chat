const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')

const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.use("/api", apiRoutes);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


  app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

