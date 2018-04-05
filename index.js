const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"), // lets use ready req.body to get params etc
  router = express.Router(),
  methodOverride = require("method-override"), // let's use HTTP verbs where the client doesn't support it
  path = require("path"),
  users = require("./server/controllers/users"),
  receipts = require("./server/controllers/receipts");

// express config
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(methodOverride());
app.set("port", process.env.PORT || 8000);

// ----- Allow CORS

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.static(__dirname + "/app"));

// define user routes
router.get("/users", users.index);
router.get("/users/:id", users.show);
router.post("/users", users.create);
router.put("/users/:id", users.update);
router.delete("/users/:id", users.delete);

// define receipt routes
router.get("/receipts", receipts.index);
router.get("/receipts/:id", receipts.show);
router.put("/receipt/:id", receipts.update);
router.post("/receipts", receipts.create);
router.delete("/receipts/:id", receipts.delete);

// register api routes
app.use("/api", router);

// start server
app.listen(app.get("port"), function() {
  console.log("Server started on port", app.get("port"));
});

module.exports = app;
