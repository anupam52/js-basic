let score = null

// console.log(typeof score);
let isValueIn = Number(score);
// console.log(typeof isValueIn);
// console.log(isValueIn);


// string -> "33" -> converts into number -> o/p = 33
// string ->"33ab" -> converts into number but -> o/p = NaN
// string -> "" -> converts into number but -> o/p = 0
// boolean -> true > converts into number but -> o/p = 1
// boolean -> false > converts into number but -> o/p = 0
//undefined -> converts into number but -> o/p = NaN
//null -> converts into number but -> o/p = 0

let isLoggedIn = "tr"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true ,  0 => false
// "" => false,  "tryyy" => true

let someNumber = null

let someString = String(someNumber)
// console.log(typeof someString);
// console.log(someString);

// 22 => string
// null => null
//undefined => undefined
// primitive 
// 7 => number , string , null, undefined , boolean, symbol ,bigint

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // false

const bigNum = 1234567899n

console.log(typeof bigNum);



//reference (non-primitive) 
//array ,objects, function

const heros = ["shaktiman", 'nagraj', 'doga']

console.log(typeof heros);

const userDetails = {
    name : 'Anupam',
    id: 'B220012',
    branch: 'ETC',
    age: 25
}
console.log(typeof userDetails);

const myFun = function(){
    console.log('hey!');
    
}
myFun()


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive), heap(non-primitive)

//in stack we get copy of actual value

let myName = 'anupam'

let myAnotherName = myName
myAnotherName = 'suraj'
console.log(myName);
console.log(myAnotherName);


//in heap we get reference of that value

let userOne = {
    id:'b220012',
    branch : 'etc'
}
let userTwo = userOne

userTwo.id = 'b220013'

console.log(userOne);
console.log(userTwo);



