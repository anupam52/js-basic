// function addTwoNum(num1, num2){
//     console.log(num1+num2);
    
// }
function addTwoNum(num1, num2){
    const result = num1 + num2;
    return result
    
}

const result = addTwoNum(3,4)
// console.log("result :" ,result);

function loginUserMessage (username){
    if(username === undefined){
        return`Please enter a username`
    }
    return`${username} just logged in`
}

console.log(loginUserMessage());

