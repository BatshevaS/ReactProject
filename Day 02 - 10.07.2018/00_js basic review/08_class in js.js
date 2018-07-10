class Car {
    
    //default parameter 
    setModel(param="ABC") {
        this.model =param;
    }

    constructor(param) {
        this.color = param
    }
}


let c1 = new Car("Green");
console.log(c1.color);  //-->Green
console.log(c1.model);  //-->undefined
c1.setModel();
console.log(c1.model);  //-->ABC
c1.setModel("Test");
console.log(c1.model);  //-->Test