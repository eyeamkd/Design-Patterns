package AbstractFactoryPattern;

public class KidsSide implements  Side{

    private final String sideType;

    public KidsSide(){
        System.out.println("This is a Kids Side");
        this.sideType = "Kids";
    }

}
