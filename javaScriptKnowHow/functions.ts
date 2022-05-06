
// function declaration
function testingFunction(){
    console.log("Function");
    console.log(this); // returns window
}

// function expression
const testingFunction2 = function testingFunction1(){
    console.log("Function1");
    console.log(this); // returns window
}

// arrow function
const testingFunction3 = (anyValue: any) => {
    console.log(anyValue)
    console.log(this); // returns empty
}

