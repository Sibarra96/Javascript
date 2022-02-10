const Car = require('./models/car');

/*class Vehicule{
    constructor(type){
        this.type = type;
    }
    start(){
        return `Starting: ${this.type}`;
    }
}*/

let car = new Car(5164);
console.log(car.start());