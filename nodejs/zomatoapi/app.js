let express = require("express");
// import express from 'express';
let { dbConnect, getData } = require("./controller/dbController");
let app = express();
let port = 9110;
let cors = require("cors");
let swaggerUi = require("swagger-ui-express");
let swaggerDocument = require("./swagger.json");
let package = require("./package.json");
const { Collection } = require("mongodb");

swaggerDocument.info.version = package.version;
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.get("/health", (req, res) => {
  res.send("Hiii from Express");
});

app.get("/location", async (req, res) => {
  let query = {};
  let collection = "location";
  let output = await getData(collection, query);
  res.send(output);
});

app.get("/mealtype", async (req, res) => {
  let query = {};
  let collection = "mealtype";
  let output = await getData(collection, query);
  res.send(output);
});

//restaurants
app.get("/restaurants", async (req, res) => {
  let query = {};
  let stateId = req.query.stateId;
  let collection = "restaurants";

  if (stateId) {
    query = { state_id: Number(stateId) };
  } else {
    query = {};
  }

  let output = await getData(collection, query);
  res.send(output);
});

app.get('/filter/:mealId', async(req, res) => {
let query ={}
let mealId = req.params.mealId;
query = {
    "mealTypes.mealtype_id":Number(mealId)
}
let collection = "restaurants";
let output = await getData(collection, query);
res.send(output)
})

app.listen(port, (err) => {
  dbConnect();
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
});
