// ArrayMethod for Even Numbers
var arr1 = [10, 11, 22, 30 ,27]

for (var i = 0; i <= arr1.length - 1; i++) {
    if(arr1[i] % 2 == 0) {
        console.log('For Even Numbers',arr1[i]);
    }
}
// Array Method for Odd Number
for (var i = 0; i <= arr1.length -1; i++) {
    if(arr1[i] % 2 !== 0) {
        console.log('For Odd Numbers',arr1[i]);
    }
}

// Array Method using push ()
var arr2 = [10, 20, 30, 40]
console.log('Before push',arr2); // Before push [ 10, 20, 30, 40 ]
arr2.push(50);//Append element at the end of array
console.log('After push', arr2); // After push [ 10, 20, 30, 40, 50 ]

// Array Mwthod using unshift() 
arr2.unshift(6);// Append element at begining of array
console.log('After unshift',arr2); // After unshift [ 6, 10, 20, 30, 40, 50 ]

// Array Method using shift()

arr2.shift();// it will help to remove element at begining of array
console.log('After shift',arr2);// After shift [ 10, 20, 30, 40, 50 ]

// Array Method using pop()

arr2.pop();// It will help to remove element at end of array
console.log('After pop',arr2); // After pop [ 10, 20, 30, 40 ]

// Array method using include()

let arr3 = ['apple', 'banana', 'orange']
console.log(arr3.includes('banana')); // It checks if an array contains specific element // true

// Array method indexof()

let arr4 = ['apple','cherry', 'Mango']
console.log(arr4.indexOf('cherry'));// It return the first index of a specific element or -1 if not found

// Array splice(start index, deleteCount, Element should be add)

var arr5 = [10, 20, 30, 40, 50, 60, 70]
console.log(arr5.splice(1,2,100,200,300))// [ 20, 30 ]
console.log('After splice',arr5);// After splice:  [10, 100, 200, 300, 40,  50,  60,  70]

// Array Method using slice(start index, end index -1)

var arr6 = [100, 200, 300, 400]
console.log(arr6.slice(1,3));// [ 200, 300 ]

// Array Methods using concat():
let num1 = [10, 20, 30]
let num2 = [40, 50]
let newarr = num1.concat(num2);
console.log(newarr);

//Array Method using join():

var names = ['a', 'p', 'p', 'l', 'e']
let fruit_name = names.join("_");
console.log(fruit_name);

//Array method using array unpacking 

let user = ['Sachin', 'Sourav', 'Kavya', 'Hemanth']
let [user1, user2] = user;
console.log(user1);
console.log(user2);

// Array method using sort():
let arr7 = ['a', 'b', 'c']
arr7.sort()
console.log('After sort arr7 is', arr7);

// Array method using reverse():

arr7.reverse()
console.log('After reverse arr7 is', arr7);