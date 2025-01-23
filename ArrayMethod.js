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
console.log('Before push',arr2);
arr2.push(50);//Append element at the end of array
console.log('After push', arr2);

// Array Mwthod using unshift() 
arr2.unshift(6);// Append element at begining of array
console.log('After unshift',arr2);

// Array Method using shift()

arr2.shift();// it will help to remove element at begining of array
console.log('After shift',arr2);

// Array Method using pop()

arr2.pop();// It will help to remove element at end of array
console.log('After pop',arr2);

// Array method using include()

let arr3 = ['apple', 'banana', 'orange']
console.log(arr3.includes('banana')); // It checks if an array contains specific element

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