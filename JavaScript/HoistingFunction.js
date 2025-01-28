// we have used function declarations:
// Global scope
add()
sub()
function sub(){
    // scope of sub function
   // console.log(x+y);
    let x = 20;
    var y = 8;
    console.log(x+y);
}
function add(){
    console.log(a+b);
    var a = 50;
    var b = 20;
    console.log(a+b);
}
// Hoisting Function: It is type function where function will be hoisted at top the declaration , so that we can access function before its declaration anywhere int the program.
