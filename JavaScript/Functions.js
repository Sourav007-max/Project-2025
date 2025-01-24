// 4 Type of Functions:

// 1. Functions without input and without return
function add() {
    var a = 10;
    var b = 30;
    console.log("Addition is ",a+b);
}
add();

// 2. Functions with input and without return
function sub(x, y) {
    console.log("Subtraction is ",x-y);
}
sub(200, 100);

// 3. Functions without input and with return
function mul() {
    var p = 10;
    var q = 3;
    return p * q;
}
let result = mul();
console.log("Multiplication is ",result);

// 4. Functions with input and with output
function div(x, y) {
    return x / y;
}
console.log("Division is ",div(10, 2));

