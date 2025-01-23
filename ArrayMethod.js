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

// Array Method using push 
var arr2 = [10, 20, 30, 40]
console.log('Before push',arr2);
arr2.push(50);//Append element at the end of array
console.log('After push', arr2);

// Array Mwthod using unshift 
arr2.unshift(6);// Append element at begining of array
console.log('After unshift',arr2);