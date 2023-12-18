//Abstract Class
class Character { 
    public fight(){ 

    }   

    public weapon : WeaponBehaviour;  

    weaponSetter( weaponToBeSet : WeaponBehaviour){ 
        this.weapon  = weaponToBeSet;
    }
}  

interface WeaponBehaviour{ 
    useWeapon();
} 

class KnifeBehaviour implements WeaponBehaviour{ 
    useWeapon(){ 
        console.log("Knife");
    }
} 


class BowAndArrow implements WeaponBehaviour{ 
    useWeapon(){ 
        console.log("Bow And Arrow");
    }
} 


class AxeBehaviour implements WeaponBehaviour{ 
    useWeapon(){ 
        console.log("Axe Behaviour");
    }
}  

class SwordBehaviour implements WeaponBehaviour{ 
    useWeapon(){ 
        console.log("Sword Behaviour");
    }
}

class King extends Character{ 
    constructor(){ 
        super();  
        //initially king uses sword
        this.weapon = new SwordBehaviour(); 
    }
}  

class Queen extends Character{ 
    
} 

class Knight extends Character{ 
    
}

class Toll extends Character{ 
    
} 

let king : King = new King(); 
king.weaponSetter(new BowAndArrow()); 
//now the king's weapon is Bow and Arrow        



