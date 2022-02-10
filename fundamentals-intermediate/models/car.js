class Car {
    constructor(id){
      this.id = id;
    }
    start() {
        return `Car ${this.id} is starting`;
    }
}

class Vehicule{
    constructor(type){
        this.type = type;
    }
    start(){
        return `Starting: ${this.type}`;
    }
}

class Car2 extends Vehicule {
    constructor(id){
      this.id = id;
    }
    start() {
        return `Car ${this.id} is starting`;
    }
}

module.exports = Car;