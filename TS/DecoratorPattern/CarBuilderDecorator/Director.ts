import ICar, { EngineType } from "../Car";
import { ICarBuilder } from "./Builder";

export abstract class IDirector<T> {
  builder: T;
  changeBuilder(newBuilder: T) {
    this.builder = newBuilder;
  }

  constructor(builder: T) {
    this.builder = builder;
  }
}

export class CarBuildDirector extends IDirector<ICarBuilder> {
  builder: ICarBuilder;

  constructor(builder: ICarBuilder) {
    super(builder);
  }

  buildSportsCar(): ICar {
    this.builder.addEngine(EngineType.v12);
    this.builder.addPaint("red");
    this.builder.addSeats(2);
    return this.builder.getResult();
  }

  buildSUV(): ICar {
    this.builder.addEngine(EngineType.v8);
    this.builder.addPaint("Orange");
    this.builder.addSeats(7);
    return this.builder.getResult();
  }

  buildHatchBack(): ICar {
    this.builder.addEngine(EngineType.v6);
    this.builder.addPaint("white");
    this.builder.addSeats(5);
    return this.builder.getResult();
  }
}
