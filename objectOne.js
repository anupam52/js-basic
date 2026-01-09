const user = new Object()

const tinderUser = {}

tinderUser.email = 'abc@gmail.com'
tinderUser.name = 'anu'
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const hingeUser = {
    email : 'abd@g,ail.com',
    name : {
        fullname : {
            firstname : 'anupam',
            lastname : 'anand'
        }
    }
}

// console.log(hingeUser.name.fullname.firstname);


let obj1 = {1 :'a', 2 :'b'}
const obj2 = {3 : 'a', 4 : 'b'}
const obj4 = {5 :'a', 6 :'b'}

let obj3 = {...obj1, ...obj2,...obj4} //one way
let obj5 = Object.assign({},obj1,obj2,obj4)
// console.log( obj5);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));


const superHero = {
    name : 'Batman',
    strength : 'mindset',
    specialAbility : 'none',
    weakness :'no to killing'
}

const {specialAbility : hax, name,strength} = superHero

console.log(hax);
console.log(name);
console.log(strength);









