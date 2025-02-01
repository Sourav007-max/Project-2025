// args is declared by us its not built in 
// (...) with help of this parameter javaScirpt will built their own array to execute
const add = (...sachin) => {
    let res = sachin.reduce((acc, ele)=> acc*ele,1);
    console.log('Result is: ',res);
} 
add(10,20);
add(10,20,30);

const mul = (...sachin) => {
    let res = sachin.reduce((acc, ele) => acc*ele,1);
    console.log('Multiplication is:',res);
}
mul();
mul(1,2,3);
mul(1,2,3,4);



