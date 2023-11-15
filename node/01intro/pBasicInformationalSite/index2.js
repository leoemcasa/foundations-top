const MongoClient = require('mongodb').MongoClient;
const url = `mongodb+srv://sales:${process.env.MONGODB_ATLAS}@cluster0.p2nlsvv.mongodb.net/?retryWrites=true&w=majority`;

async function findOne() {
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });
    if (!client) { return; }
    try {
        const db = client.db("sample_guides");
        let collection = db.collection('planets');
        let query = { name: 'Neptune' }
        let res = await collection.findOne(query);
        console.log(res);
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
}

findOne();
