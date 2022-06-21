require("dotenv").config();

const { MongoClient } = require("mongodb");
// Takes mongo client
const client = new MongoClient(process.env.MONGO_URI);
//Connect to database
const connection = async () => {
    try {
        await client.connect();
        console.log("Success");
        // Create a database called Movies
        const db = client.db("Movies");
        // Returns database
        return db.collection("Movies");
    } catch (error) {
        console.log(error);
    }
};

// Use connection() to test connection
//connection();

module.exports = {connection, client};