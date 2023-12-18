import IBuilder from "./IBuilder";

export enum BuildingType {
  simple = "SIMPLE",
  luxury = "LUXURY",
  ultraLuxury = "ULTRA_LUXURY",
}

export default abstract class Director {
  public builder: IBuilder;

  constructor(builder: IBuilder) {
    this.builder = builder;
  }

  changeBuilder(newBuilder: IBuilder): void {
    this.builder = newBuilder;
  }

  abstract make(buildingType: BuildingType): void;
}
