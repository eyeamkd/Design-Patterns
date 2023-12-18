import ICar, { EngineType } from "./Car";
import { IDecorator } from "./IDectorator";

export default class EngineDecorator implements IDecorator<ICar> {
  base: ICar;
  constructor(car: ICar) {
    this.base = car;
  }

  addV6Engine(): ICar {
    this.base.engine = EngineType.v6;
    return this.base;
  }

  addV12Engine(): ICar {
    this.base.engine = EngineType.v12;
    return this.base;
  }

  addV8Engine(): ICar {
    this.base.engine = EngineType.v8;
    return this.base;
  }
}
