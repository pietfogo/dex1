const { MongoClient } = require('mongodb');

async function mostrarValores() {
    const uri = "mongodb+srv://pietfogo25:5ZlWp0kRCzxQsOdz@cluster0.wfac1bt.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
  
      const collection = client.db("PokemonDatabase").collection("Pokedex");
      const documentos = await collection.find({}).toArray();
  
      console.log("Valores na coleção:");
      documentos.forEach((documento) => {
        console.log(documento);
      });
    } catch (error) {
      console.error("Erro ao mostrar valores:", error);
    } finally {
      await client.close();
    }
  }
  
  mostrarValores().catch(console.error);
  