// create object || class
const Person = function(firstName, birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
    console.log(this)
}

// instatiate object
const piotr = new Person("Piotr", 1991);

//Prototype
Person.prototype.calcAge = function (){
    console.log(2022 - this.birthYear);
}
Person.prototype.sex = 'Male'

piotr.calcAge();
console.log(piotr.__proto__)
console.log(piotr.sex)
piotr.notExisting = 10
console.log(piotr.notExisting)

const arr = [1,1,2,3,4,4]
interface Array<T> {
    unique(): Array<T>;
};
Array.prototype.unique = function (){
    return [...new Set(this)]
};

console.log(arr.unique()) 

class PersonCl {
    firstName: string
    birthYear: number
    constructor(firstName: string, birthYear: number){
        this.firstName = firstName
        this.birthYear = birthYear
    }

    set age(ammount: number){
        this.birthYear = 2022 - ammount
    }

    get age(){
        return 2022 - this.birthYear
    }

    set fullName(name){
        console.log(name)
        if (name.includes(' ')){
            this.fullName = name;
        }else{
            console.log("tescik")
        }
    }
```````````````````
    calcAge(){
        console.log(2022 - this.birthYear);
    }
}

const jessica = new PersonCl('Jessica', 1996)
jessica.calcAge()
console.log(jessica.birthYear)
console.log(jessica.age)
jessica.age = 30
console.log(jessica.age)