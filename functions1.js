/* The major diiference bewtween them is hoisting a will be hoisted that is function statement but b that is func expression will show error uncaught error */

a();
b();

// This is function statement or func declarations

function a(){
    console.log("a is called");
}

// This is func expression

 const b = function  (){
    console.log("b is called");
}

// a();
// b();

