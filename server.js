const express = require("express");
const app = express();
const HTTP_PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/getInfo", bodyParser.json(), (req, res) => {
    var mongoose = require("mongoose");

    var url = "mongodb://admin:passw0rd@ds255332.mlab.com:55332/pokemon_db";
    
    var conn = mongoose.createConnection(url);
    conn.once('open', ()=>{
        conn.collection('pekemon_sch').find({id: req.body.pid}).toArray(function(err, data){
            res.json(data);
        }); 
    });
});

app.listen(HTTP_PORT);
console.log("Express http server listening on " + HTTP_PORT);