let arr=[1,2,3,4,5];


let num1=arr[0];
let num2=arr[1];
let num3=arr[2];


console.log("num1",num1);
console.log("num2",num2);
console.log("num3",num3);


let [n1,n2,n3]=arr;
console.log("n1",n1);
console.log("n2",n2);
console.log("n3",n3);



let first1=arr[0];
let second1=arr[arr.length-1];
console.log("first1",first1);
console.log("second1",second1);


let [first2,...second2]=arr;
console.log("first2",first2);
console.log("second2",second3);

/*
OUTPUT:
_______________
num1 1
num2 2
num3 3
n1 1
n2 2
n3 3
first1 1
second1 5
first2 1
second2 [ 2, 3, 4, 5 ]
*/