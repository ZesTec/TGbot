import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import Messages from "../models/message";
dotenv.config();
 
export const collections: { messages?: mongoDB.Collection<Messages> } = {};

export async function connectToDatabase()
{
    const client = new mongoDB.MongoClient((process.env.DB_CONN_STRING || "CONNECTION STRING"));
    await client.connect();//подключение к кластеру
    const db = client.db((process.env.DB_NAME|| "DB NAME"));
    
    // подключение к коллекции
    const MessageCollection = db.collection<Messages>(process.env.DB_COLLECTION_NAME || "collection name");

    // Persist the connection to the Games collection
    collections.messages = MessageCollection;

    console.log(
        `Successfully connected to database: ${db.databaseName} and collection: ${MessageCollection.collectionName}`,
    );
}

