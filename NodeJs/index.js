const express = require("express")
const app = express()

var mensagem = "Olá pessoal da 2525, aqui é do backend hahaha"
var pokemons = {nome: "Charizard", tipo: "Fire and Fly", tier: "Ouverused"};

app.get("/", function(req, res) {
    res.send(mensagem);
    console.log("Acabou de abrir ou recarregar a página principal!");
});

app.get("/pokemons", function(req, res) {
    res.send(pokemons);
    console.log("Abriu ou recarregou a pasta que guarda os Pokémons!");
});

app.listen(2525, function(){
    console.log("server rodando na 2525, boa Pietro!");
});