require("./config/db");

require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const UserRouter = require("./api/User");

const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
/* app.use(helmet());
app.use(morgan("common")); */

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

app.use(cors());

app.use("/user", UserRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
