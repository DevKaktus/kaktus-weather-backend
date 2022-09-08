import express from "express";
import updateInterval from "./fetchInterval.js";
import { kazan } from "./fetchToUrl.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json(kazan);
});

updateInterval();

app.listen(PORT, () => console.log("server started on port " + PORT));
