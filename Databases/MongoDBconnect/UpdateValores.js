const { MongoClient } = require('mongodb');
const {poke1, poke2, poke3, poke4, poke5, poke6, poke8, poke9, poke10, poke11, poke12} = require('./variaveis')

async function trocarValores() {
    const uri = "mongodb+srv://pietfogo25:5ZlWp0kRCzxQsOdz@cluster0.wfac1bt.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    
    try {
      await client.connect();
      
      const collection = client.db("PokemonDatabase").collection("Pokedex");
      const filter = {poke2: "Aegislash"}
      const update = {poke9: "Amoongus"}
      await collection.updateMany(filter, update);
      console.log("Pokémons alterado com sucesso!");
    } catch (error) {
      console.error("Erro ao alterar Pokémon!");
    } finally {
      await client.close();
    }
  }
  trocarValores().catch(console.dir);