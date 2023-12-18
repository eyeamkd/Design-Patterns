export interface IPrototypeRegistry<T> {
  registry: Map<string, T>;
  getItemById(id: string): T;
  removeItemFromRegistry(id: string): boolean;
}
