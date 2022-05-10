// Array
const array1 = [1,'2',3,4] // this is how to define array without typescript
const array2: Array<number> = new Array(1,2,3,4)
const values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
const element = ""

console.log(array1[0])
console.log(array1[array1.length -1])

array1[2] = 33
array1.push(element) // add element at the end of an array
array1.unshift(element) // add element at the beggining of an array
array1.pop() // remove last element from an array
array1.shift() // remove first element from an array
array1.indexOf(element) // if exists returns index number, if not returns -1
console.log(1 in array2) // returns true or false
array1.includes(element) // returns true or false

//desctructing array
const [a, b, c, d, e="a"] = array1

//... operator
let anystring = "aaaaaa"
const arr11 = [...array1] //[1,2,3,4]
const arr12 = [array1] //[[1,2,3,4]]
const arr13 = [...anystring] //['a','a','a','a','a']

const [c1, c2, ...others] = array1 // ...others = [3,4]


// Objects
const objectos1 = {
    key1: 'Value1',
    key2: 'Value2',
    key3: 'Value3',
    key4: 'Value4',

    getValue: function(key: any){
        return this[key]
    }
}

const {key1: mappedVariableName1, key3} = objectos1 // Value1 Value3

console.log(objectos1.key1)
console.log(objectos1['key1'])
console.log(objectos1['key11']) // returns undefined
console.log(objectos1.getValue('key1'))

//loops
for (let element of Object.keys(objectos1)){
    console.log(element)
}

for (let element of Object.entries(objectos1)){
    console.log(element)
}
