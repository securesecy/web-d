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