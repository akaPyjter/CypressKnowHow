
// function declaration
function testingFunction(a: number = 1){
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

//IIFE
(function(){
    console.log('1')
})();

(() => console.log('2'))();



//Clousers

const secure = function () {
    let passager = 0;
    return function (){
        passager++;
        console.log(passager)
    }
}
const booker = secure()
booker();
booker();
booker();