const { MongoClient, ObjectId } = require('mongodb');
const { poke1, poke2, poke3, poke4, poke5, poke6, poke8, poke9, poke10, poke11, poke12 } = require('./variaveis');

async function removerValores() {
  const uri = "mongodb+srv://pietfogo25:5ZlWp0kRCzxQsOdz@cluster0.wfac1bt.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const collection = client.db("PokemonDatabase").collection("Pokedex");
    /* //Deletar por nome de variável (Many)
    const filter = {poke3, poke4};*/
    //Deletar por id (One)
    const result = await collection.deleteOne({ _id: new ObjectId('649dcdd4dc2cae278b9e67f1') });
    //const filter = {poke3, poke4};
    //const result = await collection.deleteOne(filter);
    console.log("Itens removidos com sucesso!", result.deletedCount);
  } catch (error) {
    console.error("Erro ao remover os pokémons!", error);
  } finally {
    await client.close();
  }
}

removerValores().catch(console.dir);
