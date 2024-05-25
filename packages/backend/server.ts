const express = require("express");
const app = express();
const port = 3000;
import * as Express from "express";
import { createMainWallet, generateTempAddresses, signTransaction } from './utils/index';

app.post("/createMainWallet", (req: Express.Request, res: Express.Response) => {
  createMainWallet().then((wallet) => {res.send(wallet);})
});

app.post("/generateTempAddress", (req: Express.Request, res: Express.Response) => {
  generateTempAddresses(req.body.nonce, req.body.mnemonic).then((addresses) => {res.send(addresses);})  
});

app.post("/send-eth", (req: Express.Request, res: Express.Response) => {
  signTransaction(req.body.mnemonic, req.body.to, req.body.amount);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
