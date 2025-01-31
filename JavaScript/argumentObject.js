function add() {
    console.log(arguments[0], arguments[1], arguments[2]);
} 
add(); // undefined undefined undefined ----> arguments = []
add(10);// 10 undefined undefined       ----> arguments = [10]
add(10, 20);// 10 20 undefined          ----> arguments = [10, 20]
add(10, 20, 30);// 10 20 30             ----> arguments = [10, 20, 30]

function mul() {
    if (arguments.length === 2) {
        console.log(`Multiplication of ${arguments[0]} and ${arguments[1]} is:`,arguments[0]*arguments[1]);
    } else if (arguments.length === 3) {
        console.log(`Multiplication of ${arguments[0]}, ${arguments[1]} and ${arguments[2]} is:`,arguments[0]*arguments[1]*arguments[2]);
    } else if (arguments.length === 4) {
        console.log(`Multiplication of ${arguments[0]}, ${arguments[1]}, ${arguments[2]} and ${arguments[3]} is:`,arguments[0]*arguments[1]*arguments[2]*arguments[3]);
    } else {
        console.log("Multiplication cannot be performed");
    }
}
mul();
mul(10, 20);
mul(10, 20, 30);
mul(10,20,30,40);
mul(10,20,30,40,50);

function mul() {
    let res = 1;
    for (let i = 0; i < arguments.length; i++) {
        res = res * arguments[i];
    }
    console.log("Multiplication Result is:",res);
}

mul(10,20);