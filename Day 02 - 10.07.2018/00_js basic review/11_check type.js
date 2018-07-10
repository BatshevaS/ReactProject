

function printType(p){
    console.log(`${p?p.toString():p} is type ${typeof(p)}`)
}


printType(11);
printType("Eitan");
printType(true);
printType(Symbol());
printType(undefined);
printType(null);
printType(()=>{});
printType([1,1,1]);
printType({"num":12});

/*
OUTPUT:
__________________________
11 is type number
Eitan is type string
true is type boolean
Symbol() is type symbol
undefined is type undefined
null is type object
()=>{} is type function
1,1,1 is type object
[object Object] is type object

*/