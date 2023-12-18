import Director, { BuildingType } from "./IDirector";

export default class HouseDirector extends Director {
  make(buildingType: BuildingType): void {
    switch (buildingType) {
      case BuildingType.simple:
        this.builder.buildCeiling();
        this.builder.buildFlooring();
        this.builder.buildRooms();
        break;
      case BuildingType.luxury:
        this.builder.buildCeiling();
        this.builder.buildFlooring();
        this.builder.buildPool();
        this.builder.buildRooms();
        break;
      case BuildingType.ultraLuxury:
        this.builder.buildCeiling();
        this.builder.buildFlooring();
        this.builder.buildPool();
        this.builder.buildPorch();
        this.builder.buildRooms();
        break;
      default:
        console.log("Improper Building Type Selected");
        break;
    }
  }
}
