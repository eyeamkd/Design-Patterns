package BuilderPattern;
import Utils.*;
public abstract class Director {
    Builder builder;

    void changeBuilder(Builder builder){
        this.builder = builder;
    }

    abstract void make(String builderType);
}
