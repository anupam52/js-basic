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
console.log(typeof someString);
console.log(someString);

// 22 => string
// null => null
//undefined => undefined
