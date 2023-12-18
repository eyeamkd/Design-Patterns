import ICar from "../Car";
import { CarBuilder, ICarBuilder } from "./Builder";
import { CarBuildDirector, IDirector } from "./Director";

const carBuilder: ICarBuilder = new CarBuilder();
const carBuildDirector: CarBuildDirector = new CarBuildDirector(carBuilder);

const sportsCar: ICar = carBuildDirector.buildSportsCar();
const suv: ICar = carBuildDirector.buildSUV();
const hatchBack: ICar = carBuildDirector.buildHatchBack();
