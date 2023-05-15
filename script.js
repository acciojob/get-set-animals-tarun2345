//complete this code
class Animal {
	species;
	constructor(species){
		this.species = species;
	}
    makeSound(){
        console.log("bow");
    }
}

class Cat extends Animal {
    purr(){
        console.log("purr")
    }
}

class Dog extends Animal {
   bark(){
    console.log("woof")
   }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
