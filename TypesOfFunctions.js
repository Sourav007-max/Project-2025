// Function Decelaration: Hoisted
function greet1(name) {
    return `Hello,${name}`
}
console.log(greet1('Sourav'))

// Function Expression: Not Hoisted
let greet2 = function(name) {
     return `Hello,${name}`
}
console.log(greet2('Hemanth'))

// Arrow Function: Callbacks
let greet3 = (name)=> {
    return `Hello,${name}`
}
console.log(greet3('Sachin'))