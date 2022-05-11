let stringVariable: string = "Piotr";
let numberVariable: number = 123;
let booleanVariable: boolean = true;
let undefinedVariable: undefined;
let nullValue: null = null; // typeOf object
let nan: number = NaN // JS issue that typeOf Nan isnumber


// Strings
const variable1 = "A"
const variable2 = "B"
const variable3 = "C"

const string1 = "I" + variable1 + ' ' + variable2
const string2 = `a ${variable1}`
string1[0]
string1.indexOf('A')
string1.length
string1.lastIndexOf('A')
string1.slice(4) // (4,)
string1.slice(4,7) // (4,7)
string1.toLocaleLowerCase()
string1.toUpperCase()
string1.trim // remove spaces from start and endś
string1.replace('a', "aa").replace('b', 'bb')
string1.split(' ')
const newString = [1,2,3].join(' ')




// Bool
Boolean(0) // false
Boolean(undefined) // false
Boolean('Any string') // true
Boolean({}) // true
Boolean(' ') // true
Boolean('') // false
// && and
// || or
// ! not


// TypeConvertion
let value1 = 100 + "100" // '100100'
let value2 = '100' + 100 // '100100'
let value3 = Number('100') + 100 // 200
let value4 = Number("Emo") // NanN
let value5 = String(123) // 123.toString // '123'
let value6 = 'I am' + 23 + 'years old' // 'I am 23 years old'
// @ts-ignore
let value7 = '23' - 23 - 3 // -3
// @ts-ignore
let value8 = '23' / '2'  // 11.5

// == and ===
// == does not compare types, === does compare types
//18 == '18' // true
//18 === '18' // false


// Conditionals one line
18 >= 20 ? console.log(true):console.log(false)



//Loops

//one by one
for(let rep: number = 1; rep <= 10; rep++){}

//backward
const tab: Array<number> = [1,2,3,4,5]
for(let i = tab.length - 1; i >= 0; i--){}


//While
let loop: number = 1
while (loop <=10){loop++}

//nullish
let value = 0
let nullish = value ?? 20 // nulish = 20
value = 1
nullish = value ?? 20 // nulish = 1
let d1 // undefined
d1 ??= 100 // if undefined assign 100