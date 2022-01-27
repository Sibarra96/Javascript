/*
// Destructuring Objects
let car  = {id: 5000, style:'Jeep Wrangler'};
let {id,style} = car;

console.log(id,style);
*/


// Spread Syntax
function startCars(car1, car2,car3){
    console.log(car1,car2,car3);
}
let cars = 'abc';
startCars(...cars);


/*
// Controlling Loops
// 1. Breaking a Loop
for(let i=0; i<5;i++){
    console.log(i);
    if(i === 3)
        break;
}
// 2. Continuing a Loop
for(let i=0;i<4;i++){
    if(i === 3)
        continue;        
    console.log(i);
}
*/