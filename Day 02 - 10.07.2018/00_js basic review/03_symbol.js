//symbol - val type - new es6 


//Symbol()- Returns a new unique Symbol value.
let s1=Symbol();
let s2=Symbol();

console.log(s1==s2);  //--> false


//Symbol()- Returns a new unique Symbol value.
//@param description — Description of the new Symbol
let s3=Symbol("test");
let s4=Symbol("test");

console.log(s3==s4);  //--> false


console.log(s1,s2,s3,s4);  //--> Symbol() Symbol() Symbol(test) Symbol(test)


let key=Symbol("lastName");
let obj={
    firstName:"Alice",
    firstName:"Bob",
    [Symbol("lastName")]:"A.",
    [Symbol("lastName")]:"B.",
    [key]:"C."
}


console.log(obj[Symbol("lastName")]);  //--> undefined 
console.log(obj[key]); //--> C.
console.log(obj);  //--> { firstName: 'Bob',[Symbol(lastName)]: 'A.',[Symbol(lastName)]: 'B.' ,[Symbol(lastName)]: 'C.'}