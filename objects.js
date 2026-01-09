// singleton
//object.create

// object literals
const mySym = Symbol("key1")
const jsUser = {
    name : "John",
    [mySym] : 'key2',
    "full name" : "John Wick",
    age : 50,
    location : "New York",
    occupation : "Killing",
    ismember : 'no',
    isActive: "True",
    lastSeen : ["monday", "saturday"]
}

// console.log(jsUser.lastSeen);
// console.log(jsUser['full name']);
// console.log(typeof mySym);
// Object.freeze(jsUser)
// jsUser.isActive = 'false'
// console.log(jsUser.isActive);
// console.log(jsUser);

jsUser.greeting = function (){
    console.log("Hello JS User");
    
}

jsUser.greetingTwo = function (){
    console.log(`Hello JS User, ${this["full name"]}`);
    
}
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());







