var arr1 = [10,30,90,200,120,140]
console.log('The length of arr1 array:',arr1.length);

console.log('Element at 0th index value:',arr1[0]);
console.log('Element at 1st index value:',arr1[1]);
console.log('Element at 2ns index value:',arr1[2]);
console.log('Element at 3rd index value:',arr1[3]);

// using for loop
for(var i = 0; i <= 3; i++) {
    console.log(`Element at index ${i}`,arr1[i]);
}

for(var i = 0; i <= arr1.length - 1; i++) {
    console.log(`Element at index ${i}`,arr1[i]);
}