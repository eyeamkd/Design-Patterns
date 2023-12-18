package BuilderPattern;

public class HouseBuilder implements Builder{
    @Override
    public void BuildWalls() {
        System.out.println("Walls Built");
    }

    @Override
    public void BuildFloors() {
        System.out.println("Floors Built");
    }

    @Override
    public void BuildCeiling() {
        System.out.println("Ceiling Built");
    }

    @Override
    public void BuildPool() {
        System.out.println("Pool Built");
    }

    @Override
    public void BuildFurnishedKitchen() {
        System.out.println("Furnished Kitchen Built");
    }

    @Override
    public void BuildFurnishedRooms() {
        System.out.println("Furnished Rooms Built");
    }

    @Override
    public void BuildPorch() {
        System.out.println("Furnished Porch Built");
    }

    @Override
    public void BuildGarage() {
        System.out.println("Garage Built");
    }
}
