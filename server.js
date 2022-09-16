// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { check } = require("express-validator");

require("dotenv").config();

const mail = require("./server/mail");

const app = express();

const serveStatic = require("serve-static");
app.use(serveStatic(__dirname + "/dist"));

app.use(morgan("tiny"));
app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());

app.post("/mail", [
  check("name").isLength({ min: 3 }).trim().escape(),
  check("email").isEmail().normalizeEmail(),
  check("subject").isLength({ min: 1 }).trim().escape()
], async (req, res) => {
  console.log(req.body);
  let msg = {};
  for (let obj in req.body) {
    msg[obj] = req.body[obj]
  }
  msg.senderip = req.socket.remoteAddress;
  let result = await mail.sendMail(msg)
  res.send(result)
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started ${port}`);
});
