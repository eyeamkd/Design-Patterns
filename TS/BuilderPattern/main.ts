import HouseBuilder from "./HouseBuilder";
import HouseDirector from "./HouseDirector";
import IBuilder from "./IBuilder";
import Director, { BuildingType } from "./IDirector";

const builder: IBuilder = new HouseBuilder();
const buildingDirector: Director = new HouseDirector(builder);

buildingDirector.make(BuildingType.ultraLuxury);
