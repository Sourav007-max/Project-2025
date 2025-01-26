var arr = [10,11,12,13,14,15]
arr.forEach((ele, inx, arr)=> console.log(ele, inx, arr));

console.log(arr.filter((ele)=> ele %2 ==0));

console.log(arr.map((ele)=> ele * ele));

console.log(arr.reduce((acc, ele)=> acc + ele, 0));