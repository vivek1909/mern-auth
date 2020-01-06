const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// bodyParser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// database config
const db = require("./config/keys").mongoURI;

// connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected!"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server is up and running on port ${port} !`)
);
