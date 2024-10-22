//HOF HIGHER ORDER FUNCTION
//WHEN WE PASS THE ENTIRE Fn. AS ARGUMENT IN ON ANOTHER Fn. , IS KNOWN AS HOF.

function fun(a){
    a();
    console.log("this is a fun function");
}

function test(){
    console.log("this is a test function");
}

fun(test);

//WHEN WE RETURN ENTIRE INNER FUNCTION INSIDE A OUTER FUNCTION IS KNOWN AS HOF.

function outer(){ //HOF
    function inner(){
        console.log("this is a inner function");
    }
    return inner;
}

let res = outer();
res();



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