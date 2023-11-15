
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://sales:${process.env.MONGODB_ATLAS}@cluster0.p2nlsvv.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
//    await const db = client.db("sample_guides");
    await client.db("sample_guides").collection("planets")
      .find({ name: "Neptune"})
      .toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        console.log('result');
        client.close();
      })
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
