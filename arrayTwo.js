const indianHeros = ["Nagraj","Doga","Super Commando Dhruva","Inspector Steel"]

const dcHeros = ['Superman','Batman','Aquaman','Flash']

// indianHeros.push(dcHeros) //another array is pushed as a single element

const heros = indianHeros.concat(dcHeros) // better way

// same thing can be done in a more readable way
const marvelHeros =['Ironman','Thor','Wolverine','WinterSoldier']

// const universalHerosAssemble = [ ...indianHeros,...dcHeros,...marvelHeros]
// console.log(universalHerosAssemble); 

const arr = [1,2,[3],4,[5,6,7,[8,[9]]]]
// console.log(arr.flat(3));

console.log(Array.isArray(2,3,4));

console.log(Array.from('anupam'));
console.log(Array.from({name : 'anupam'})); //interesting

let arr1 = 100
let arr2 = 200
let arr3 = 300
console.log(Array.of(arr1,arr2,arr3)); //multiple variables or similiar




