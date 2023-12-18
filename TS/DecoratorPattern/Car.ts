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

export default interface ICar {
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
}
