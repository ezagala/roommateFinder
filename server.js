const express = require("express"); 
const bodyParser = require("body-parser");
const path = require("path");

// Sets up Express
const app = express();
const PORT = process.env.PORT || 3000;

// Express data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app); 

// Server listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
