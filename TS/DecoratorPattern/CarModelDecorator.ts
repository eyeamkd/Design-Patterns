import ICar, { CarType } from "./Car";
import Car from "./Car";
import { IDecorator } from "./IDectorator";

export class CarModelDecorator implements IDecorator<Car> {
  base: ICar;

  constructor(car: ICar) {
    this.base = car;
  }

  makeSedan(): ICar {
    this.base.body = CarType.sedan;
    return this.base;
  }

  makeSUV(): ICar {
    this.base.body = CarType.suv;
    return this.base;
  }

  makeHatchBack(): ICar {
    this.base.body = CarType.hatchBack;
    return this.base;
  }
}
