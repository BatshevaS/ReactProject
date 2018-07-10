
//create a function that gets a few numbers, and returns =the sum of all this numbers
function f1(nums) {

    let result = 0;
    //check if nums is an array
    if (nums && nums.length) {
        for (let n of nums) 
            result += n;
    }
    return result;
}

console.log(`f1([1,2,4,7]) ${f1([1,2,4,7])}`);




//create a function that gets a few numbers, and returns =the sum of all this numbers
// params is a parameter with ... prefix
// when we send the parameters in the function call - we send regular prameters
// when we get in the function - we get it as an array
function f2(...nums) {

    let result = 0;

        for (let n of nums)
            result += n;

    return result;
}


console.log(`f2(1,2,4,7) ${f2(1,2,4,7)}`);



/*
OUTPUT:
f1([1,2,4,7]) 14
f2(1,2,4,7) 14

*/