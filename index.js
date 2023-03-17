import express from "express";
import updateInterval from "./fetchInterval.js";
import { kazan } from "./fetchToUrl.js";
import { PORT } from "./config/config.js";

const app = express();

let userIp = null

app.get("/", (req, res) => {
  res.status(200).json(kazan);
  userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
  console.log(new Date() + " " + userIp)
});

updateInterval();

app.listen(PORT, () => console.log("server started on port " + PORT));
