export default abstract class IConnection<T> {
  static connectionString: string = null;
  static connectionEstablished: boolean = false;
}
