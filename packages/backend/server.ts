const express = require("express");
const app = express();
const port = 3000;
import * as Express from "express";

app.get("/", (req: Express.Request, res: Express.Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
