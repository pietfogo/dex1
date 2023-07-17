const { MongoClient } = require('mongodb');
const {poke1, poke2, poke3, poke4, poke5, poke6, poke7, poke8, poke9, poke10, poke11, poke12} = require('./variaveis')

async function inserirValores() {
  const uri = "mongodb+srv://pietfogo25:5ZlWp0kRCzxQsOdz@cluster0.wfac1bt.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    
    const collection = client.db("PokemonDatabase").collection("Pokedex");
    const documento = [{poke: poke1}, {poke: poke2}, {poke: poke3}, {poke: poke4}, {poke: poke5}, {poke: poke6}, {poke: poke7}, {poke: poke8}, {poke: poke9}, {poke: poke10}, {poke: poke11}, {poke: poke12}]
    const result = await collection.insertMany(documento);
    console.log("Pokémons adicionados com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir os pokémons!", error);
  } finally {
    await client.close();
  }
}
inserirValores().catch(console.dir);


