

function execFunc(param){
    param();
}


function f1(){
    console.log("f1");
}

execFunc(f1);

execFunc(
    function(){
        console.log("f2");
    }
);

execFunc(
    ()=>{console.log("f3");}
);


/*
OUTPUT:
_____________________

f1
f2
f3

*/