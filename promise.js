function fun(){

    return new Promise((resolve, reject) => {
        resolve();
        
       // let random_numbeer = Math.random();
    })
}


function fun1(){

    return new Promise((resolve, reject) => {
        reject();
    })
}
console.log(fun());
console.log(fun1());


function fun2() {
    return new Promise((resolve, reject) => {
        
    })
    
}
console.log(fun2());