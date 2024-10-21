console.log("hello")

for(let i =0; i<0; i++){
    console.log(i)
}

let arr = [1,2,3,"gjrht","jhfjy",true]

let person = {
    Age : 18,
    Name : "Ayushi"
}
console.log(person)
typeof(person)
console.log(arr)
typeof(arr)

function add(a,b){
    return a+b;
}
let res = add(2,4);
console.log(res)
typeof(res)

function add(n){
    return (n*(n+1))/2;
}
let rest = add(5);
console.log(rest)


function factorial(n){
    let fact = 1;
    for(let i = 1; i<= n ; i++){
        fact = fact*i;
    }
    return fact;
}
let n =5;
let r = 2;
let res1 = factorial(n)/factorial(n-r);
console.log(res1)