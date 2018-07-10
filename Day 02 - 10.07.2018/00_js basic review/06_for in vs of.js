

let arr=["a","b","c"];

let obj={
    name:"Alice",
    age:30
}


console.log("-----------------for in (arr)-------------------------");
for(let x in arr){ //x represents the index of the current iteration
    console.log(x);
}

console.log("-----------------for of (arr)-------------------------");
for(let x of arr){  //x represents the elment's content of the current iteration
    console.log(x);
}




console.log("-----------------for in (obj)-------------------------");
for(let x in obj){  //x represents the prpo's key of the current iteration
    console.log(x);
}

console.log("-----------------for of (obj)-------------------------");
for(let x of obj){  // Error - for-of can run only with iterable objects 
    console.log(x);
}



/*

OUTPUT:
_______________________________________

-----------------for in (arr)-------------------------
0
1
2
-----------------for of (arr)-------------------------
a
b
c
-----------------for in (obj)-------------------------
name
age
-----------------for of (obj)-------------------------

for(let x of obj){
             ^

TypeError: obj is not iterable
*/