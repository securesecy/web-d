//CLOSURE IN JS

function OUTER(){
    let a = 0;
    function INNER(){
        a++;
        console.log(a);
        console.log("this is a inner function");
    }
    return INNER;
}
let res1 = OUTER();
res1();
res1();
res1();
res1();
res1();
res1();