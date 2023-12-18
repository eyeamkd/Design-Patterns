import { Subject } from "./Interfaces";

class ConcreteSubject implements Subject {
  notifyObservers() {
    throw new Error("Method not implemented.");
  }
  registerObserver(): Boolean {
    return true;
  }

  removeObserver(): Boolean {
    return true;
  }
}
