demo = {
    functionScope: (carId) =>{
        let message = 'Starting';
        let startFn = function turnKey(){
            let message = 'Override';
        };
        startFn();
        console.log('Function Scope:',message);
    },
    defaultParameters: ()=>{
        let trackCar = (carId,city='HEREDIA')=>{
            console.log(`Tracking ${carId} in ${city}`);
        }
        console.log(trackCar(578));
        console.log(trackCar(875,'SAN JOSE'));
    }
}
// demo.functionScope(123);
demo.defaultParameters();

let closure = (function (){
    let carId = 123;
    let getid = function(){
        return carId;
    } ;
    return {
        getid: getid
    }
})();
// console.log('Clousure: ',closure.getid());

let o = {
    carId: 432,
    getId: function(){
        console.log(this);
        return this.carId;
    }
};
// console.log(o.getId());

let bind = {
    carId: 569,
    getId: function(){
        return this.carId;
    }
};
let newCar = {carId: 456};
let newFn = bind.getId.bind(newCar);
// console.log('Bind New Function:',newFn());

