


function f1(){
    console.log("f1");
}

let f2=f1;  //f2 points to f1 function

let f3=function f5(){
    console.log("f3");
}

let f4=()=>{
    console.log("f4");
}


f1();
f2();
f3();
f4();


/*
OUTPUT:
_____________________

f1
f1
f3
f4
*/