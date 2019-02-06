const express = require("express");
const users = require("./routes/users");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });

app = express();

app.use(bodyParser.json());

app.use("/users", users);

const port = 4000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
