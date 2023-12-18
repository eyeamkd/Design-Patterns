import IBuilder from "../../BuilderPattern/IBuilder";
import ICar, { Car, EngineType } from "../Car";

export interface ICarBuilder {
  reset();
  // This will include the mandatory steps involved in the car building process;
  addEngine(engine: EngineType);

  addSeats(seatsNumber: number);

  addPaint(paintColor: string);

  getResult(): ICar;
}

export class CarEngineBuilder {
  car: ICar;

  constructor(car: ICar) {
    this.car = car;
  }
  addV6Engine() {
    this.car.engine = EngineType.v6;
  }
  addV8Enginer() {
    this.car.engine = EngineType.v8;
  }

  addV12Engine() {
    this.car.engine = EngineType.v12;
  }
}

export class CarBuilder implements ICarBuilder {
  private car: ICar;
  constructor() {
    this.car = new Car();
  }

  reset() {
    this.car = new Car();
  }
  addEngine(engine: EngineType) {
    this.car.engine = engine;
  }
  addSeats(seatsNumber: number) {
    this.car.seats = seatsNumber;
  }
  addPaint(paintColor: string) {
    this.car.paint = paintColor;
  }

  getResult(): ICar {
    return this.car;
  }
}
