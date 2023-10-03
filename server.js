const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.sendFile(__dirname + "/src/pages/index.html");
});

app.post('/', function(req, res) {
    res.sendFile(__dirname + "/src/pages/submitted.html");
});

app.listen(process.env.PORT || 3000);