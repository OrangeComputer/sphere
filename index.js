const express = require("express"),
  requireDir = require("require-dir"),
  app = express(),
  bodyParser = require("body-parser"), // lets use ready req.body to get params etc
  router = express.Router(),
  methodOverride = require("method-override"), // let's use HTTP verbs where the client doesn't support it
  path = require("path"),
  // Get all controllers using requireDir to load from ./controllers
  controllers = requireDir("./server/controllers"),
  routes = require("./server/config/routes.json");

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

// Build API endpoints dynamically from routes
// ---
// Step 1. Iterate over all routes (root-level)
Object.keys(routes).forEach(path => {
  // Step 2. Iterate over paths
  Object.keys(routes[path]).forEach(method => {
    // Step 3. Pull controller and handler properties for each endpoint
    const { controller, handler } = routes[path][method];
    // Step 4. Build endpoint, ex: app.get(/some/path, (req, res) => ...)
    app[method]("/api" + path, (req, res) => {
      // Step 5. When a route is hit, call the handler method on the controller
      controllers[controller][handler](req)
        // Step 6. When a controller resolves, respond with 200 and data
        .then(data => {
          res.status(200).send(data);
        })
        // Step 7. If a controller rejects, handle error response
        .catch(err => {
          res.status(err.statusCode || 500).send(err.message);
        });
    });
  });
});

// start server
app.listen(app.get("port"), function() {
  console.log("Server started on port", app.get("port"));
});

module.exports = app;
