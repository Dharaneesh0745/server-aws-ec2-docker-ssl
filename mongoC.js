import { MongoClient } from "mongodb";

// const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const db_url = encodeURIComponent(process.env.MONGO_URL.trim());
const connectionString = db_url;
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("integration_ninjas");
export default db;