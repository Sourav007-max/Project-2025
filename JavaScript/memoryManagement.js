console.log(a);
var a = 10;
console.log(a);
// var keyword:
// 1. The variable which declared using var initially it is undefined and located the memory allocation phase.
// 2. as soon as javaScript code loaded in the global execution record is created.
// 3. the global execution record divided into two parts memory allocation phase and code execution phase

// console.log(a); cannot access 'a' before initialization
let b = 20;
console.log(b);

// let Keyword:
//1. when the variable is declared using let it will be inside temperoral dead zone(unintialized Variable) at memory allocation phase.
//2. the variable which are present in the TDZ cannot be accessed.
//3. if we try access the variable inside TDZ, we will get error.

// console.log(a); cannot access 'a' before initialization
const c = 500;
console.log(c);

// const Keyword:
//1. when the variable is declared using const it will be inside temperoral dead zone(unintialized Variable) at memory allocation phase.
//2. the variable which are present in the TDZ cannot be accessed.
//3. if we try access the variable inside TDZ, we will get error.

add();
function add() {
    console.log(10+20);
}
// Host Keyword:
//1.The function declarations are hoisted at the top of its declaration.
// 2. beacuse hoisting function declaration can be called before its implementation.