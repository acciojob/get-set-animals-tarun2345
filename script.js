//complete this code
class Animal {
	species;
	constructor(species){
		this.species = species;
	}

    get species(){
        return this.species;
    }
    makeSound(){
        console.log("The "+this.species+" makes a sound");
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

let animal = new Animal("Tiger");
console.log(animal.species)
animal.makeSound();

let cat = new Cat("Siamese");
cat.makeSound("The Siamese makes a sound");
cat.purr();

let dog = new Dog("Golden Retriever");
dog.bark();
dog.makeSound("The Golden Retriever makes a sound")
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
