const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});