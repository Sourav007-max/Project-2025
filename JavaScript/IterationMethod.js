
let arr1 = [10, 20, 30, 40, 50]
for(var i = 0; i <= arr1.length; i++) {
    console.log('At index:',i,'Element is:',arr1[i]);
}
// filter() is also called as argument function its helps to callbacks to everyelement 
// 2. its also Higher order function
// 3. filter() function use for checking the element is true with in the arr.
// iterationMethod using filter(): for even

let arr2 = [1,2,3,4] 
even = arr2.filter((ele) => ele % 2 === 0);
console.log('Even number element:',even);

even = arr2.filter(function(ele) {
    if(ele % 2 === 0)
        return ele;
}
);
console.log(even);

// iterationMethod using filter(): for Odd 
odd = arr2.filter((ele) => ele % 2 !== 0);
console.log('Odd number elements:', odd);

// iterationMethod using Map(): for square
// Map() function is used to operation or modify the element

sq = arr2.map((ele) => ele * ele);
console.log(sq);

sq = arr2.map(function(ele) {
    if(ele > 0) 
        return ele * ele;
});
console.log('Square of element:',sq);

// iterationMethod using reduce(): 
// its is used tp reduce the value in single element

product = arr2.reduce(function(acc, ele) {
    return acc * ele;
},1);
console.log('Product of element:',product);

add = arr2.reduce((acc, ele)=> acc + ele, 0);
console.log('Sum of elements:',add);