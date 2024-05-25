const express = require("express");
const app = express();
const port = 3000;
const { createMainWallet } = require("./utils/createMainWallet");
const { generateTempAddresses } = require("./utils/generateTempAddresses");
const { signTransaction } = require("./utils/signTx");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Express API for Stealh Address",
      version: "1.0.0",
      description: "Express API with autogenerated swagger doc",
    },
  },
  apis: ["./routes/*.js"], // files containing annotations as per Swagger
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.post("/createMainWallet", (req, res) => {
  createMainWallet().then((wallet) => {
    res.send(wallet);
  });
});

app.post("/generateTempAddress", (req, res) => {
  generateTempAddresses(req.body.nonce, req.body.mnemonic).then((addresses) => {
    res.send(addresses);
  });
});

app.post("/send-eth", (req, res) => {
  signTransaction(req.body.mnemonic, req.body.to, req.body.amount);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});