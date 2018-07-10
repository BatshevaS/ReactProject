

let key1="firstName";

function getKey(){
    return "age";
}

// JSON:
// key - can be symbol / string
// value - can be any type
let obj={
    [key1]:"Alice",
    [getKey()]:20,
    grade:100,
    [Symbol()]:"test1",
    [Symbol("mySym")]:"test2"

}


console.log(obj); 


/*
OUTPUT:
_________________________

{ 
  firstName: 'Alice',
  age: 20,
  grade: 100,
  [Symbol()]: 'test1',
  [Symbol(mySym)]: 'test2' 
}

*/