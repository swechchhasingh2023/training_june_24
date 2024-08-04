let mongo = require('mongodb')
// import mongo from 'mongodb'
let {MongoClient} = mongo;
// let mongoUrl = "mongodb://127.0.0.1:27017";

let mongoUrl = "mongodb+srv://swechchhasingh2017:3AygzMS5TnB5JX76@mern.mjg31yk.mongodb.net/?retryWrites=true&w=majority&appName=mern"

let client = new MongoClient(mongoUrl);

async function dbConnect(){
    await client.connect()
    console.log("Connection Succesful")
}

let db = client.db('demoNode');

async function getData(colName,query){
    let output = [];
    try{
        const cursor = db.collection(colName).find(query);
        for await(const data of cursor){
            output.push(data)
        }
        cursor.close();
    } catch(err){
        output.push({"Error":"Error in get Data"})
    }

    return output
}

module.exports= {
    dbConnect,
    getData
}