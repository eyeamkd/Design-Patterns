export default abstract class IConnection<T> {
  abstract connectionString: string;
  abstract getConnectionInstance(): T;
}
