add(10, 20) // NaN(not a number)
add(10, 20, 30) // NaN
add(10, 20, 30, 40)// 100

function add(a, b) {
    console.log(a+b);
} 

function add(a, b, c) {
    console.log(a+b+c);
}

function add(a, b, c, d) {
    console.log(a+b+c+d);
}

// Function Overloading: It is process of declaring multiple functions with different number of parameters.
// In JavaScript when we declare multiple function with same name but different number of parameters then only last declared function can be Invoked and all other prevoius function Declaration become useless.  
// JavaScript do not support function overloading.