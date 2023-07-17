const express = require("express");
const app = express();

const objeto = {nome: "marcos", func:"programador"}

app.get("/", function(req, res){
    res.send(objeto);
});

app.listen(4900, function(){
    console.log("Está rodando na 4900");
});