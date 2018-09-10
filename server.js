const express = require("express");
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(HTTP_PORT);
console.log("Express http server listening on " + HTTP_PORT);