import IBuilder from "./IBuilder";

export default class HouseBuilder implements IBuilder {
  buildRooms() {
    console.log("Rooms are built");
  }
  buildCeiling() {
    console.log("Ceiling is built");
  }
  buildFlooring() {
    console.log("Flooring is built");
  }
  buildPool() {
    console.log("Pool is built");
  }
  buildPorch() {
    console.log("Porch is built");
  }
}
