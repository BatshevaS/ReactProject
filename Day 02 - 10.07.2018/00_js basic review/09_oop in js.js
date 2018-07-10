

class Person{
    constructor(param){
        this.age=param;
    }

    toString(){
        return `age: ${this.age}`;
    }
}


class Student extends Person{
   constructor(p1,p2){
        super(p1);
        this.grade=p2;
    }

    toString(){
        return super.toString()+` grade: ${this.grade}`;
    }
}


let person=new Person(20);
let student=new Student(21,100);

console.log(`person info: ${person}`);
console.log(`student info: ${student}`);


/*
OUTPUT:
____________________
person info: age: 20
student info: age: 21 grade: 100

*/