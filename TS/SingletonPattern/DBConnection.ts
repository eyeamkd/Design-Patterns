import IConnection from "./IConnection";

export default class DBConnection extends IConnection<DBConnection> {
  connectionString: string;
  private connect(): boolean {
    console.log("Connecting Via ", this.connectionString);
    return true;
  }
  private static connectionInstance: DBConnection = null;
  private static connectionEstablished: boolean = false;
  constructor() {
    super();
    DBConnection.connectionEstablished = true;
    this.connect();
  }
  getConnectionInstance(): DBConnection {
    throw new Error("Method not implemented.");
  }
  public static getConnectionInstance(): DBConnection {
    if (!this.connectionEstablished) {
      DBConnection.connectionInstance = new DBConnection();
    }
    return DBConnection.connectionInstance;
  }
}

export class SQLConnection extends DBConnection {
  connectionString: string = "SQL CONNECTION STRING";
}

export class MongoConnection extends DBConnection {
  connectionString: string = "MONGO CONNECTION STRING";
}
