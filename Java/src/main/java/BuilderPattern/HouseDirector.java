package BuilderPattern;

import Utils.Constants;

public class HouseDirector extends Director {

    public static final String simpleBuilderType = Constants.BuilderType.simple;

    public static String luxuryBuilderType = Constants.BuilderType.luxury;

    public static String ultraLuxuryBuilderType = Constants.BuilderType.ultraLuxury;

    @Override
    void make(String builderType) {
        switch (builderType){
            case simpleBuilderType:
                this.builder.BuildCeiling();
                this.builder.BuildFloors();
                this.builder.BuildGarage();
                break;
            default:
                throw new IllegalStateException("Unexpected value: " + builderType);
        }
    }
}
