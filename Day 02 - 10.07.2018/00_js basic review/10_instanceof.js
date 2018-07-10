

class Person{
    constructor(param){
        this.age=param;
    }
}


class Student extends Person{
   constructor(p1,p2){
        super(p1);
        this.grade=p2;
    }
}


let person=new Person(20);
let student=new Student(21,100);


//instanceof - returns true if the object is from the specific class or a sub-class
console.log(`person instanceof Person: ${person instanceof Person}`);
console.log(`person instanceof Student: ${person instanceof Student}`);
console.log(`student instanceof Person: ${student instanceof Person}`);
console.log(`student instanceof Student: ${student instanceof Student}`);


/*
OUTPUT:
____________________

person instanceof Person: true
person instanceof Student: false
student instanceof Person: true
student instanceof Student: true

*/