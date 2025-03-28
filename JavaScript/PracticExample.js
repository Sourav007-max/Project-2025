// let age = 22
// const name = "sourav"
// var isNumber = true

// console.log("My age is: ", age)
// console.log("My Name is: ", name)
// console.log("true or false?:", isNumber)

// var score = 20
// console.log("Recent score:", score)
// score = 40
// console.log("Updated score:", score)

// let firstName = "Sourav"
// let LastNAme = "Dhayapule"
// console.log(firstName + " " + LastNAme)

// function showScope() {
//     let city = "Bengaluru"
//     var country = "India"

//     console.log("City is:", city)
//     console.log("Country is:", country)
// }
// showScope();
// console.log("Outside function, City:", city)
// console.log("Outside function, Country:", country);

//Operators

// let a = 20
// let b = 10
// console.log("Addition of a and b", a+b)
// console.log("subtraction of a and b", a-b)
// console.log("Division of a and b", a/b)
// console.log("Multiplication of a and b", a*b)
// console.log("Modulus of a and b", a % b == 0)
// console.log("Expoiential of a and b", a ** b)
// console.log("Increment of a and b", a++)
// console.log("Decrement of a and b", a--)

// let age = 18
// let canVote = (age >= 18) ? "Yes" : "No"
// console.log(canVote)
 
// let animals = ["Rabbit", "Cat", "Dog"]
// console.log(animals[1])

// let colors = ['red', 'Blue', 'Red']
// colors.push("green")
// console.log(colors)

// let number = [10, 20, 30, 40, 50]
// number.splice(0,2,25,35)
// console.log(number)

// let age = [12, 35, 34, 18, 20, 16]
// let adults = age.filter(age => age >= 18) 
// console.log(adults)

// ArrayMethods
// To Add elements
// 1. push(): it add element at the last
// let arr = [10, 20, 30]
// arr.push(40)
// console.log(arr) // [ 10, 20, 30, 40 ]

// // 2. unshift() : it add element at the first
// arr.unshift(0)
// console.log(arr) //[ 0, 10, 20, 30, 40 ]

// // To remove elements
// // 1. pop() : its remove element at last
// arr.pop() 
// console.log(arr) // [ 0, 10, 20, 30 ]

// // 2. shift() : it remove element at first
// arr.shift()
// console.log(arr) // [ 10, 20, 30 ]

// // accessing elements
// // 1. Accessing by index
// let colors = ["red", "green", "blue"]
// console.log(colors[1]) // green

// // 2. splice() method
// colors.splice(1,1,"Orange")
// console.log(colors)


// function checkAge(age) {
//     if(age < 13) {
//         return "Child"
//     } else if (age >= 13 && age <= 19) {
//         return "Teen"
//     } else if (age >= 20 && age <= 64) {
//         return "Adult"
//     } else {
//         return "Older"
//     }
// }

// function sumEvenNumber(n) {
//     let sum = 0;
//     for(let i = 0; i < 10; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumEvenNumber(10));

// function multiplicationTable(num) {
//     let table = [];
//     for(let i = 1; i < 10; i++) {
//         table.push(num * i);
//     }
//     return table;
// }
// console.log(multiplicationTable(2));

// function reverseNumber(num) {
//     let result = []
//     while (num >= 1) {
//         result.push(num);
//         num--;
//     }
//     return result;
// }
// console.log(reverseNumber(5));

// console.log(a);
// let a = 10;
// console.log(a);
// var sum = add(5, 10);
// return a + b


// from the spreadOperator we achieve function overloading
// function mul() {
//         if(arguments.length === 2) {
//             console.log(arguments[0] * arguments[1]);
//         } else if (arguments.length === 3){
//             console.log(arguments[0] * arguments[1] * arguments[2]);
//         } else if (arguments.length === 4) {
//             console.log(arguments[0] * arguments[1] * arguments[2] * arguments[3]);
//         } else {
//             console.log("Multiplication cannot be performed");
//         }
// }
// mul(10)
// mul(10, 10);
// mul(10, 10, 5);
// mul(10, 10, 5, 2);
// mul(10, 10, 5, 2, 4);

// function mul() {
//     if (arguments.length === 0) {
//         return "No arguments in multiplication"
//     } else if (arguments.length === 1) {
//         return arguments[0];
//     } else {
//         let result = 1;
//         for(let i = 0; i < arguments.length; i++) {
//             result *= arguments[i];
//         }
//         return result;
//     }
// }

// console.log(mul());
// console.log(mul(10));
// console.log(mul(10, 20));
// console.log(mul(10, 20, 30));

// function areaMethod() {
//     const PI = 3.14;
//     if(arguments.length === 1) {
//         let radius = arguments[0];
//         let area = PI * radius * radius;
//         return area;
//     } else if (arguments.length === 2) {
//         let radius = arguments[0];
//         let length = arguments[1];
//         let area = radius * length;
//         return area;
//     } else {
//         return "Invalid arguments"
//     }
// }
// console.log(areaMethod());
// console.log("Area of Circle is:",areaMethod(10));
// console.log("Area of Rectangle is:", areaMethod(10, 20));


// function describePerson(...args) {
//     if(args.length === 1) {
//         let name = args[0];
//         return "Name:" + name;
//     } else if (args.length === 2) {
//         let name = args[0];
//         let age = args[1];
//         return "Name:" + name + " " +"Age:" + age
//     } else if (args.length === 3) {
//         let name = args[0];
//         let age = args[1];
//         let city = args[2];
//         return "Name:" + name + " " + "Age:" + age + " " +"City:" + city;
//     } else {
//         return "Invalid input";
//     }
// }

// console.log(describePerson("Sourav"));
// console.log(describePerson("Sourav", 22));
// console.log(describePerson("Sourav", 22, "Bengaluru"));

// const car = {
//     color : "Red",
//     brand : "Supra",
//     model : 2003,
//     start : function() {
//         console.log("Its Exhaust sound is Amazing.")
//     }
// };

// console.log(car.color);
// console.log(car.brand);
// console.log(car.model);
// car.start();

