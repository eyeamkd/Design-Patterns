import DBConnection, { MongoConnection, SQLConnection } from "./DBConnection";

const sqlConnection = SQLConnection.getConnectionInstance();
const mongoConnection = MongoConnection.getConnectionInstance();
