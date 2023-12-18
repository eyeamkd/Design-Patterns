import IConnection from "./IConnection";

export default class DBConnection extends IConnection<DBConnection> {
  connectionString: string;
  connect(): boolean {
    console.log("Connecting Via ", this.connectionString);
    return true;
  }
  private static connectionInstance: DBConnection = null;
  private constructor() {
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

export class SQLConnection extends IConnection<DBConnection> {
  getConnectionInstance(): DBConnection {
    throw new Error("Method not implemented.");
  }
  static connectionString: string = "SQL CONNECTION STRING";
  static connectionInstance: DBConnection;

  private constructor() {
    super();
    SQLConnection.connect();
  }
  static getConnectionInstance(): DBConnection {
    if (SQLConnection.connectionEstablished) {
      return SQLConnection.connectionInstance;
    }
    SQLConnection.connect();
    return this.getConnectionInstance();
  }

  static connect(): boolean {
    console.log("Establishing Connection Via", this.connectionString);
    SQLConnection.connectionEstablished = true;
    return SQLConnection.connectionEstablished;
  }
}

export class MongoConnection extends IConnection<DBConnection> {
  static connectionString: string = "SQL CONNECTION STRING";
  static connectionInstance: DBConnection;
  static connectionEstablished: boolean = false;
  private constructor() {
    super();
    MongoConnection.connect();
  }
  static getConnectionInstance(): DBConnection {
    if (this.connectionEstablished) {
      return this.connectionInstance;
    }
    MongoConnection.connect();
    return this.getConnectionInstance();
  }

  private static connect(): boolean {
    if (!MongoConnection.connectionEstablished) {
      console.log(
        "Establishing Connection Via",
        MongoConnection.connectionString
      );
      MongoConnection.connectionEstablished = true;
      return MongoConnection.connectionEstablished;
    }
  }
}
