/* How function works in JS and How Globla Execution Context is created and how it is behave accordingly JS engine */

var x =1;
a();
b();
console.log(x);
 
/* It will execute line by line and in GEC and call stack will maintain order because it is single threaded */

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}

