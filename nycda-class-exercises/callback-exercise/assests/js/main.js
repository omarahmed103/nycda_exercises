class Cat {
    constructor(catName){
        this.name = catName
    }

    talk(){
        console.log("meow")
    }
}

class Dog {
    constructor(dogName){
        this.name = dogName
    }

    talk(){
        console.log("woof")
    }
}

class Zoo{
    constructor(){
        this.animalArray = []
    }

    addAnimal(animal){
        this.animalArray.push(animal)
    }

    eachAnimal(callback){
        // let newAnimalArray = this.animalArray
        for (let i = 0; i < this.animalArray.length; i ++){
            callback()
        }
    }
}

let cat = new Cat("frisky")
cat.talk()
let dog = new Dog("jack")
console.log("hello")
let zoo = new Zoo()

zoo.addAnimal(cat)
zoo.addAnimal(dog)
console.log(zoo)


zoo.eachAnimal(function(){
    
        console.log("helllllo")
    
})