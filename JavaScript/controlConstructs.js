// if-else
var age = 19;
if(age > 18) {
    console.log("Age is greater than 18");
} else {
    console.log("Age is not greater than 18");
}

// Switch()
var day = "Tuesday";
switch (day) {
    case "monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednsday":
        console.log("Today is Wednsday");
        break;
    default:
        console.log("Just another day");        
}

// for loop():
for(var i = 0; i <= 10; i++) {
    console.log(i);
}

// while loop():
let count = 1;
while (count <= 5) {
    console.log("Count is:", count);
    count++;
}

// do-while loop():
let number = 1;
do {
    console.log("Count is:",number);
    number++;
} while(number <= 3);

// for a loop: returns a each of each items
var arr = [100,200,300]
for (var i of arr){
    console.log(i);
}

// for in loop:return index of each item
var arr1 = ['Sourav', 'Kavya', 'Sachin']
for (var i in arr1){
    console.log(i);
}

// forEach():
var arr2 = [10,20,30]
arr2.forEach((ele, index, complete_array)=>{
    console.log(ele, index, complete_array);
})

// break statement:
for (let i = 1; i<= 5; i++) {
    if(i === 3) break;
    console.log(i);
}

// continues statement:
for (let i = 1; i<= 5;i++) {
    if(i == 3) continue;
    console.log(i);
}
