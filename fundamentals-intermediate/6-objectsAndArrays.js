// Constructor Functions
function Car(id){
    this.carId = id;
    this.start = function(){
        console.log('Car started: ' + this.carId);
    }
}
// let car = new Car(123);
// car.start();


// Prototypes
Car.prototype.stop = function(){
    console.log('Car stoped: ' + this.carId);
}
// car.stop();


// Expanding Objects Using Prototypes
String.prototype.hello = function(){
    return this.toString() + 'Hello';
}
// console.log('Sergio '.hello());


// JSON - JavaScript Object Notation
let car = {
    id: 123,
    style: 'Wrangler'
};
// console.log('Object: ' + car);
// console.log('JSON: ' + JSON.stringify(car));

let jsonIn =
`
    [
        {"carId": 123, "style": "Wrangler"},
        {"carId": 456, "style": "Tucson"},
        {"carId": 789, "style": "Vitara"}
    ]
` 
// let carIds = JSON.parse(jsonIn);
// console.log(carIds);


// Array Iteration
let carIds = [
    {carId: 123, model: "Corolla", style: "sedan"},        
    {carId: 456, model: "Wrangler", style: "4x4"},        
    {carId: 789, model: "Centra", style: "sedan"}    
];

// carIds.forEach(car => console.log(car));
// carIds.forEach((car,index) => console.log(car,index));

let smallCar = carIds.filter(
    car => car.style === 'sedan'
);

let jeep = carIds.find(
    jeep => jeep.carId === 456
)
// console.log(smallCar);
console.log(jeep);



