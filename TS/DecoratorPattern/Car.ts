import IPrototype from "../PrototypePattern/IPrototype";

export enum EngineType {
  v6 = "V6",
  v8 = "V8",
  v12 = "V12",
}

export enum CarType {
  sedan = "SEDAN",
  suv = "SUV",
  hatchBack = "HATCHBACK",
}

export default interface ICar extends IPrototype<ICar> {
  engine: EngineType;
  body: CarType;
  paint: string;
  transmission: "AUTOMATIC" | "MANUAL";
  seats: number;
}

export class Car implements ICar {
  engine: EngineType;
  body: CarType;
  paint: string;
  transmission: "AUTOMATIC" | "MANUAL";
  seats: number;

  clone(): ICar {
    const newCar = new Car();
    newCar.body = this.body;
    newCar.paint = this.paint;
    newCar.engine = this.engine;
    newCar.seats = this.seats;
    newCar.transmission = this.transmission;
    return newCar;
  }
}
