// Function Decelarartion:
function add(a, b) {
    console.log(a+b);
}
add(100, 300);

// Function Expression
const sub = function(a, b) {
    console.log(a-b);
} 
sub(120, 100);

// Arrow Function

const mul = (a, b) => {
    console.log(a * b);
}
mul(10, 5);

const msg = () => "Hello World";
let res = msg();
console.log(res);
