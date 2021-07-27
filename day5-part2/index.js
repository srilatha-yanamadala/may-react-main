let express = require("express");
let app = express();
app.use(express.static(__dirname+"/public"));
app.listen(3000, "localhost");
console.log("express is now serving on localhost:3000");