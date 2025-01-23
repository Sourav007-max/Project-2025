function greet() {
    console.log('Hello');
}
console.log(greet);

// functions are also the objects in JavaScript

console.log(typeof greet);

function identifyDataType(value) {
    if (value === null) {
        return 'Null';
    }
    if (Array.isArray(value)) {
        return 'Array'
    }
    return typeof value;
}
res = identifyDataType([10,20,30]);
console.log(res);
