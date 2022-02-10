// Handling Error
/*
try{
    let car = newCar;

    
} catch(error){
    console.log('Error: ', error);
}
finally{
    console.log('This always executes');
}

try{
    throw new Error('CUSTOM ERROR');
}
catch(error){
    console.log('Error: ', error );
}

console.log('Continuing...');*/

// Promises

let promise = new Promise(
    function(resolve,reject){
        setTimeout(resolve,100,'someValue');
    }
);

promise.then(
    value => console.log('fullfilled: ' + value),
    error => console.log('rejected:' + error)
);

console.log(promise);