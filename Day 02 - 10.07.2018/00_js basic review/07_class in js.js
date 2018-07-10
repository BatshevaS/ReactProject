class Car {
    
    setModel() {
        this.model = "ABC";
    }

    constructor() {
        this.color = "red"
    }
}


let c1 = new Car();
console.log(c1.color);  //-->red
console.log(c1.model);  //-->undefined
c1.setModel();
console.log(c1.model);  //-->ABC