import ICar, { Car } from "./Car";
import { CarModelDecorator } from "./CarModelDecorator";
import EngineDecorator from "./EngineDecorator";
import { IDecorator } from "./IDectorator";

let car: ICar = new Car();
const engineDecorator: EngineDecorator = new EngineDecorator(car);
const carModelDecorator: CarModelDecorator = new CarModelDecorator(car);
car = engineDecorator.addV8Engine();
car = carModelDecorator.makeSedan();
